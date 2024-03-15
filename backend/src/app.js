import express from 'express';
import cors from 'cors';
import configObject from './config/configenvironment.js';
import initializeDatabase from './repository/factory.js';
import booksRouter from './routes/books.routes.js';

const app = express();
const env = configObject;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'DELETE', 'PUT', 'POST'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('PORT', env.PORT || 8080);

app.listen(app.get('PORT'), () => {
  console.log('Aplicacion corriendo en el puerto http://localhost:8080');
  initializeDatabase();
});

app.use('/api/books', booksRouter);

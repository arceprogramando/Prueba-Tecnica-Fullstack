import express from 'express';
import cors from 'cors';
import configObject from './config/configenvironment.js';
import initializeDatabase from './repository/factory.js';

const app = express();
const env = configObject;

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET'],
  }),
);

app.set('PORT', env.PORT || 8080);

app.listen(app.get('PORT'), () => {
  console.log('Aplicacion corriendo en el puerto http://localhost:8080/');
  initializeDatabase();
});

app.get('/alive', (req, res) => {
  res.json({
    message: 'La api esta conectada y funciono el mensaje de alive',
  });
});

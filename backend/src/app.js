import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET'],
  }),
);
app.listen(8080, () => {
  console.log('Aplicacion corriendo en el puerto http://localhost:8080/');
});

app.get('/alive', (req, res) => {
  res.json({
    status: 202,
    message: 'La api esta conectada y funciono el mensaje de alive',
  });
});

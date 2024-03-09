import mongoose from 'mongoose';
import configObject from './configenvironment.js';

const { MONGODB_URI, BASE_URL, COLLECTION_NAME } = configObject;

const configConnection = {
  url: `${MONGODB_URI}${COLLECTION_NAME}` ?? `mongodb://${BASE_URL}:/${COLLECTION_NAME}`,
  options: {},
};

const mongoDBConnection = async () => {
  try {
    console.log('se conecto a la base de datos');
    const connectDatabase = await mongoose.connect(configConnection.url, configConnection.options);
    return connectDatabase;
  } catch (error) {
    const messageError = console.error(`
    Error al intentar conectar a la base de datos.
    Error con la URL de conexión:
    Detalles: ${error.message}`);

    return messageError;
  }
};

export default mongoDBConnection;

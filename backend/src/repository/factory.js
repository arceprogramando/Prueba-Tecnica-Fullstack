import mongoDBConnection from '../config/mongo.config.js';
import configObject from '../config/configenvironment.js';

const env = configObject;
const { PERSISTENCE } = env;

const initializeDatabase = async () => {
  try {
    let Database;
    switch (PERSISTENCE) {
      case 'MONGO':
        Database = await mongoDBConnection();
        break;
      default:
        throw new Error('Tipo de Persistencia en archivos no encontrada, únicamente MongoDB para esta prueba técnica, ingrese variable de entorno');
    }
    return Database;
  } catch (error) {
    throw new Error(`Error al inicializar la base de datos ${error.message}`);
  }
};

export default initializeDatabase;

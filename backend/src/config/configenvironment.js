import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
});
const { PORT, PERSISTENCE, BASE_URL, MONGODB_URI, COLLECTION_NAME } = process.env;

const configObject = {
  PORT,
  PERSISTENCE,
  BASE_URL,
  MONGODB_URI,
  COLLECTION_NAME,
};

export default configObject;

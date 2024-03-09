import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
});
const { PORT } = process.env;

const configObject = {
  PORT,
};

export default configObject;

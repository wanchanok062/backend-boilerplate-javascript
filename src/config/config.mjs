// config.mjs
import dotenv from "dotenv";
dotenv.config();

const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

const commonConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false,
};

const development = {
  ...commonConfig,
  database: process.env.DB_NAME,
};

const test = {
  ...commonConfig,
  database: process.env.DB_NAME,
};

const production = {
  ...commonConfig,
  database: process.env.DB_NAME,
};

export default {
    development,
    test,
    production
};
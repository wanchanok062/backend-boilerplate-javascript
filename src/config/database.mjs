// database.mjs
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import config from "./config.mjs";

dotenv.config();

const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

const env = process.env.NODE_ENV || 'development';
const { database, username, password, host, dialect } = config[env];

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect,
    logging: false
  }
);

export default sequelize;
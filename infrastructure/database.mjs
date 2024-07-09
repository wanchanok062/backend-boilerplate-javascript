import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import chalk from "chalk";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

try {
  await sequelize.authenticate();
  console.log(chalk.green.bold.bgGreenBright('Connection has been established successfully.'));
} catch (error) {
  console.error(chalk.red.bold('Unable to connect to the database:'), error);
}

export default sequelize;
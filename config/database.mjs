// database.mjs
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import chalk from "chalk";
import Table from "cli-table3";

dotenv.config();

const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

export const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();

    const table = new Table({
      head: [chalk.green('Database Status')],
      colWidths: [50],
    });

    table.push(["Connection has been established successfully."]);

    console.log(table.toString());
  } catch (error) {
    console.error(chalk.red.bold("Unable to connect to the database:",error));
  }
};

export default sequelize;

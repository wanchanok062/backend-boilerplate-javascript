//app.mjs
import express from "express";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import { mainMiddleware, apiLimiter, speedLimiter } from "./Middleware/middleware.mjs";
import routes from "./src/api/routes/index.mjs";
import dotenv from "dotenv";
import Table from "cli-table3";
import sequelize, { authenticateDatabase } from "./config/database.mjs";

dotenv.config();

const app = express();
app.use("/api", apiLimiter, speedLimiter);
app.use(mainMiddleware.responseTime);
app.use(express.json());

const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.use("/api", routes);

const initializeDatabase = async () => {
  try {
    await authenticateDatabase();
    await sequelize.sync();
    console.log(chalk.bold.greenBright("Database & tables created!"));
  } catch (error) {
    console.error(chalk.red.bold("Unable to create database & tables:"), error);
  }
};

const startServer = async () => {
  try {
    await initializeDatabase();

    app.listen(PORT, () => {
      const table = new Table({
        head: [chalk.green("App Status")],
        colWidths: [55],
      });

      table.push([
        `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`,
      ]);
      console.log(table.toString());
    });

    app.use(mainMiddleware.errorHandler);
  } catch (error) {
    console.error(chalk.red.bold("Failed to start server:"), error);
  }
};
startServer();

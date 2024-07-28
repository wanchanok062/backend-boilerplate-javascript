//app.mjs
import express from "express";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import {
  mainMiddleware,
  apiLimiter,
  speedLimiter,
} from "./src/Middleware/middleware.mjs";
import routes from "./src/api/routes/index.mjs";
import dotenv from "dotenv";
import Table from "cli-table3";
import sequelize from "./src/config/database.mjs";

dotenv.config();

const app = express();
app.use("/api", apiLimiter, speedLimiter);
app.use(mainMiddleware.responseTime);
app.use(express.json());

const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.use(`/api/${process.env.API_VERSION}`, routes);

const createStatusTable = (port, environment, databaseStatus) => {
  const table = new Table({
    head: [chalk.green.bold("App Status"), chalk.green.bold("Database Status"),chalk.green.bold("Mode")],
    colWidths: [30, 23],
    wordWrap: true,
  });

  table.push([
    `Server running on port ${port}`,
    databaseStatus,
    `${environment} mode`
  ]);

  return table.toString();
};

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    app.listen(PORT, () => {
      const statusTable = createStatusTable(
        PORT,
        process.env.NODE_ENV || "development",
        "Connected and synced"
      );
      console.log(statusTable);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
    const statusTable = createStatusTable(
      PORT,
      process.env.NODE_ENV || "development",
      `Error: ${error.message}`
    );
    console.log(statusTable);
    process.exit(1);
  }
};

startServer();

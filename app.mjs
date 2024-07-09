import express from "express";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import { mainMiddleware } from "./Middleware/middleware.mjs";
import routes from "./src/api/routes/index.mjs";
import sequelize from "./infrastructure/database.mjs";
const app = express();
app.use(mainMiddleware.responseTime);
app.use(express.json());
const PORT = process.env.PROT || 3000;

app.use(cookieParser());

app.use("/api", routes);

sequelize
  .sync()
  .then(() => {
    console.log(chalk.bgWhite.bold("Database & tables created!"));
  })
  .catch((error) => {
    console.error(chalk.red.bold("Unable to create database & tables:"), error);
  });

app.listen(PORT, () => {
  console.log(chalk.cyan.bold(`Server is running on port ${PORT}`));
});

app.use(mainMiddleware.errorHandler);

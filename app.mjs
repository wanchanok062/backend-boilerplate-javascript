import express from "express";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import { mainMiddleware } from "./Middleware/middleware.mjs";
import routes from "./src/api/routes/index.mjs";

const app = express();
app.use(mainMiddleware.responseTime);
app.use(express.json());
const PORT = process.env.PROT || 3000;

app.use(cookieParser());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(chalk.cyan.bold(`Server is running on port ${PORT}`));
});

app.use(mainMiddleware.errorHandler);

import chalk from "chalk";
import morgan from "morgan";

export const mainMiddleware = {
  errorHandler(err, req, res, next) {
    console.error(chalk.red.bold("Error occurred:", err));
    res.status(500).send("Something went wrong!");
    next();
  },
  responseTime: morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  }),
};

import chalk from "chalk";
import morgan from "morgan";
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

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

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes',
  headers: true,
});

export const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 50,
  delayMs: () => 500 
});


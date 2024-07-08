import chalk from "chalk";
import { validationResult } from "express-validator";

const validate = (schema) => {
  return async (req, res, next) => {
    await Promise.all(schema.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(chalk.red.bold("Validation errors:"), errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
};

export default validate;

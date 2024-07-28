//usersSchema.mjs
import { body } from "express-validator";

const schemaCreateUser = [
  body("user_name")
    .notEmpty()
    .withMessage("userName must not be empty")
    .isLength({ min: 5, max: 50 })
    .withMessage("userName must be between 5 and 50 characters long"),
];

export default {
  schemaCreateUser,
};

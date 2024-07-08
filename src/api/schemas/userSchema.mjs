import { body } from "express-validator";

const userSchemaForPost = [
  body("name").isString().notEmpty().withMessage('Name is required and must be a string'),
  body("email").isEmail().withMessage('Email is required and must be a email'),
];

export default {
  userSchemaForPost,
};

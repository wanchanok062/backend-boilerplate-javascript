//userSchema.mjs
import { body } from "express-validator";

const userSchemaForPost = [
  body("name").isString().notEmpty().contains('wan')

];

export default {
  userSchemaForPost,
};

//usersRouters.mjs
import express from "express";
import usersController from "../controllers/usersController.mjs";
import validate from "../../Middleware/validate.mjs";
import usersSchema from "../schemas/usersSchema.mjs";

const router = express.Router();

/* example router.post("/", validate(userSchema.userSchemaForPost), userController.createUser); */
router.get("/", usersController.fetchAllUsers);
router.post("/",validate(usersSchema.schemaCreateUser), usersController.createUser);

export default router;

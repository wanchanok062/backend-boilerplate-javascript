//userRouters.mjs
import express from "express";
import userController from "../controllers/userController.mjs";
import validate from "../../../Middleware/validate.mjs";
import userSchema from "../schemas/userSchema.mjs";

const router = express.Router();
router.post("/", validate(userSchema.userSchemaForPost), userController.createUser);
router.get("/",userController.getAllUser);

export default router;

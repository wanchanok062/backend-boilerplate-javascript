//usersController.mjs
import UsersService from "../services/usersService.mjs";
import { respondSuccess, respondError } from "../functions/respond.mjs";
const fetchAllUsers = async (req, res) => {
  try {
    const users = await UsersService.getAllUers();
    respondSuccess(res , 200 , users);
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await UsersService.createUser(userData);
    respondSuccess(res, 201, user);
  } catch (error) {
    respondError(res, 400, error);
  }
};

export default {
  fetchAllUsers,
  createUser,
};

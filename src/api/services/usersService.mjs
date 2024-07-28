import User from "../models/UsersModel.mjs";
import { chunkArray } from "../functions/chunkArray.mjs";

const getAllUers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const createUser = async (usersData, batchSize = 1000) => {
  try {
    const userChunks = chunkArray(usersData, batchSize);
    const createdUsers = [];

    for (const chunk of userChunks) {
      const newUsers = await User.bulkCreate(chunk);
      createdUsers.push(...newUsers);
    }

    return createdUsers;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
export default {
  getAllUers,
  createUser,
};

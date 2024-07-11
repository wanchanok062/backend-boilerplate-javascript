//userController.mjs
const getAllUser = async (req, res) => {
  try {
    res.send([{ name: "wanchanok", age: 21 }]);
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req, res) => {
  try {
    res.send({ data: req.body });
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAllUser,
  createUser
};

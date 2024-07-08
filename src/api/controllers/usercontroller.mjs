const getAllUser = async (_req, res) => {
  try {
    res.send({ data: [{ id: 1, name: "wanchanok" }] });
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req, res) => {
  try {
    res.status(200).json({ data: req.body });
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAllUser,
  createUser
};

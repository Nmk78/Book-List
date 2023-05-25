const User = require("../Models/user_schema");
const JWT = require("jsonwebtoken");

//login user

const createToken = (_id) => {
  return JWT.sign({ _id }, process.env.SECRECT, { expiresIn: "7d" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.loginUser(email, password);
    const token = createToken(user._id);
    const id = user.id
    res.status(200).json({ email, token, id });
  } catch(error) {
      res.status(400).json({ error: error.message });
  }
};

// register user

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.registerUser(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { loginUser, registerUser };

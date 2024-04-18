const { User } = require("../../schemas/userSchema");
const jwt = require("jsonwebtoken");
const { signinBody } = require("../../types");

require("dotenv").config();

const signIn = async (req, res) => {
  const { success } = signinBody.safeParseparse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = User.findOne({
    username: req.username,
    password: req.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET
    );

    res.json({
      token: token,
    });

    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
};

module.exports = { signIn };

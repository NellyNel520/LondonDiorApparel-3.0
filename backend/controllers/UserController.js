const { User } = require('../models')
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./VerifyToken")

// UPDATE
const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hash(
      req.body.password,
      process.env.APP_SECRET
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const { User } = require('../models')
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    // password: req.body.password,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.APP_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }

}

module.exports = {
  Register,

}
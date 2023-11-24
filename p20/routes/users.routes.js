const express = require("express");

const userRouter = express.Router();

const { UserModel } = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;

  try {
    bcrypt.hash(pass, 5, async function (err, hash) {
      await UserModel.create({ name, email, pass: hash });
      res.status(200).send({ msg: "user created" });
    });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await UserModel.find({ email });
    if (user) {
      bcrypt.compare(pass, user.pass, function (err, result) {
        var token = jwt.sign({ userID: user._id }, "secret");
        res.status(200).send({ token });
      });
    } else {
      res.status(400).send({ masg: "unauthorised" });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

module.exports = {
  userRouter,
};

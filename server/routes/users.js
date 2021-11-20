const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const post = new User({
    name: req.body.name,
  });
  try {
    const savedUser = await post.save();
    res.json(savedUser);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
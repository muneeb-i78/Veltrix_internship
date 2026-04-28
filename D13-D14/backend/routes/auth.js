const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ message: "All fields required" });
    }

    const exists = await User.findOne({ email });

    if (exists) {
      return res.json({ message: "User already exists" });
    }

    // 🔐 HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.json({ message: "User registered successfully" });

  } catch (error) {
    res.json({ message: "Error registering user" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "Invalid credentials" });
    }

    // 🔐 COMPARE PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ message: "Login successful" });
    } else {
      res.json({ message: "Invalid credentials" });
    }

  } catch (error) {
    res.json({ message: "Login error" });
  }
});

module.exports = router;
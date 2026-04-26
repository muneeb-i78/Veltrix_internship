const express = require("express");
const router = express.Router();

// fake database
let users = [];

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "All fields required" });
  }

  const exists = users.find(u => u.email === email);

  if (exists) {
    return res.json({ message: "User already exists" });
  }

  users.push({ name, email, password });

  res.json({ message: "User registered successfully" });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});

module.exports = router;
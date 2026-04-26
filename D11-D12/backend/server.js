const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// routes
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);

// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
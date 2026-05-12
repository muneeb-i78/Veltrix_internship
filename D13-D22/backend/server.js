require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => {
    console.log("DB Error:", err);
    process.exit(1);
  });

// routes
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// protected test
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Dashboard access",
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ MIDDLEWARE
app.use(cors()); // allows frontend to connect
app.use(express.json()); // parse JSON

// ✅ CONNECT TO MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("DB Error:", err));

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("API working 🚀");
});

// ✅ ROUTES
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);

// ❌ Optional (not needed now but good for clarity)
// app.use("/api/auth", authRoutes);

// ✅ START SERVER
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
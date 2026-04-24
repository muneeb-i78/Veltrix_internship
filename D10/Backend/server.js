const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors()); // allow frontend to talk to backend

const PORT = 3000;

// API endpoint
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
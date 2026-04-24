const express = require("express");

const app = express();
const PORT = 3000;

// Simple API route
app.get("/hello", (req, res) => {
  res.send("Hello from your first API");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
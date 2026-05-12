const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

// ================= CREATE =================
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title required" });
    }

    const task = new Task({
      userId: req.user.userId,
      title
    });

    await task.save();
    res.json({ message: "Task created" });

  } catch (err) {
    res.status(500).json({ message: "Error creating task" });
  }
});

// ================= READ =================
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    res.json(tasks);

  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

// ================= UPDATE =================
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { title } = req.body;

    await Task.findByIdAndUpdate(req.params.id, { title });

    res.json({ message: "Task updated" });

  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
});

// ================= DELETE =================
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.json({ message: "Task deleted" });

  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
});

module.exports = router;
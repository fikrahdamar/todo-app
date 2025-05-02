// server/routes/todoRoutes.js
const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

//reast api
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil todo list.",
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const { name, deadline } = req.body;
  if (!name || !deadline) {
    return res
      .status(400)
      .json({ message: "Field name dan deadline wajib diisi" });
  }

  try {
    const newTodo = new Todo({ name, deadline });
    const save = await newTodo.save();
    res.status(200).json(save);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat menyimpan data",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await Todo.findByIdAndDelete(id);
    if (!deleteTodo) {
      return res
        .status(404)
        .json({ message: "Todo delete dengan ID tersebut tidak ditemukan." });
    }
    res.status(200).json({ message: "list todo dihapus" });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat menghapus data",
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  const { checked } = req.body;

  if (checked === undefined) {
    return res.status(400).json({ message: "Field 'checked' wajib dikirim." });
  }

  try {
    const updateChecked = await Todo.findByIdAndUpdate(
      req.params.id,
      { checked },
      { new: true }
    );

    if (!updateChecked) {
      return res
        .status(404)
        .json({ message: "Todo dengan ID tersebut tidak ditemukan." });
    }

    res.status(200).json(updateChecked);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;

const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  name: String,
  checked: Boolean,
  deadline: String,
});

module.exports = mongoose.model("Todo", todoSchema);

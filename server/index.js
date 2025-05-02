const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB terkoneksi");
  } catch (error) {
    console.error("Koneksi error:", error);
    process.exit(1);
  }
}

connectDB();

//route
const todoRoute = require("./routes/todoRoutes");
app.use("/api/todos", todoRoute);

//jalankan server
app.listen(5000, () => {
  console.log("Server jalan di http://localhost:5000");
});

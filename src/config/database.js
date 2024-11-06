const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://hemasatyanarayan113:aleeniv123@cluster0.2zc56.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

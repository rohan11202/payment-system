const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  mongoose.connect(process.env.URL).then(() => {
    console.log("Connected to MongoDb");
  });
};

module.exports = { connectDb };

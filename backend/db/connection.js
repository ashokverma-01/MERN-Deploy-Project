const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successfully");
  })
  .catch((e) => {
    console.error("Error connecting to MongoDB:", e.message);
  });

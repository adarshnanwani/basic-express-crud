const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

// Boot up the server
app.listen(3000, () => console.log("Server running..."));

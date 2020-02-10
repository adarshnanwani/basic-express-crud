const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// Middleware
app.use(express.json());

// Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on Home");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

// Boot up the server
app.listen(3000, () => console.log("Server running..."));

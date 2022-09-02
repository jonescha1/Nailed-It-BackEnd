//DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

//CONFIGURATIONS
require("dotenv").config();
const app = express();

//MIDDLEWARE

//ROUTES
app.get("/", (req, res) => {
  res.send("Root Route");
});

//PORT
const PORT = process.env.PORT || 8080;

//LISTENER
app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});

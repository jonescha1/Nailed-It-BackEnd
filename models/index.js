require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jonescha1:cEiJUy0oShrNUlPT@cluster0.452fopv.mongodb.net/NailedIt",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports.Project = require("./projects");

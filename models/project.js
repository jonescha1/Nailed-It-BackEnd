//require mongoose
const mongoose = require("mongoose");

//Schema constructor
const { Schema } = mongoose;

//Schema

//model and export
const Project = mongoose.model("Project", /* SCHEMA VARIABLE */);
module.exports = Project;

//DEPENDENCIES
const express = require("express");
const cors = require("cors");

//CONFIGURATIONS
require("dotenv").config();
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.get("/", (req, res) => {
  res.send("You have reached the Home page/Root route!");
});

app.use("/projects", require("./controllers/projects"));

app.get("*", (req, res) => {
  res.status(404).send("error 404 - Page not found");
});

//PORT
const PORT = process.env.PORT || 8080;

//LISTENER
app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});

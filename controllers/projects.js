const router = require("express").Router();
const db = require("../models/projects");

//GET ALL PROJECTS
router.get("/", (req, res) => {
  res.send("Getting all projects route");
});

//GET ONE PROJECT
router.get("/:id", (req, res) => {
  res.send(`Getting project with id of ${req.params.id}`);
});

//CREATE 1 PROJECT
router.post("/", (req, res) => {
  res.send("Route used to create a project");
});

//UPDATE 1 PROJECT //using patch so the user can update 1 thing if needed
router.put("/:id", (req, res) => {
  res.send("Route used to update");
});

module.exports = router;

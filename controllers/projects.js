const router = require("express").Router();
const { Project } = require("../models");
const db = require("../models/projects");

//GET ALL PROJECTS
router.get("/", (req, res) => {
  Project.find().then((foundProjects) => {
    res.json(foundProjects);
  });
});

//GET ONE PROJECT
router.get("/:id", (req, res) => {
  Project.findOne({ __id: req.params.id }).then((foundProject) => {
    res.json(foundProject);
  });
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

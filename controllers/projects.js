const router = require("express").Router();
const { Project } = require("../models");
const db = require("../models/projects");

//GET ALL PROJECTS
router.get("/", async (req, res) => {
const projects = await Project.find()
res.json(projects)
//Project.find().then((foundProjects) => {
    //res.json(foundProjects);
  ////});
});

//GET ONE PROJECT
router.get("/:id", (req, res) => {
  Project.findOne({ __id: req.params.id }).then((foundProject) => {
    res.json(foundProject);
  });
});

//CREATE 1 PROJECT
router.post("/", (req, res) => {
  Project.create(req.body)
    .then((createProject) => {
      res.status(200).json(createProject);
    })

    .catch((err) => {
      res.status(400).json({
        message: "An error occured, could not create the project.",
      });
    });
});

//UPDATE 1 PROJECT //using patch so the user can update 1 thing if needed
router.put("/:id", (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedProject) => {
      res.status(200).json(updatedProject);
    })
    .catch((err) => {
      res.status(400).json({
        message: "An error occured, could not edit the project",
      });
    });
});

module.exports = router;

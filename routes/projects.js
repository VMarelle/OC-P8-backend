const express = require("express");
const { getAllProjects, addProject } = require("../dao/projectDAO");
const Project = require("../models/Project");
const router = express.Router();

// Route GET pour récupérer tous les projets
router.get("/", (req, res) => {
  const projects = getAllProjects();
  console.log(projects);
  res.json(projects);
});

// Route POST pour ajouter un nouveau projet
router.post("/", (req, res) => {
  const { id, title, image, description } = req.body;
  const newProject = new Project(id, title, image, description, link);
  const createdProject = addProject(newProject);
  res.status(201).json(createdProject);
});

module.exports = router;

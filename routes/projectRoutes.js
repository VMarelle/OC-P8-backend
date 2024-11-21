const express = require("express");
const { getAllProjects, addProject } = require("../dao/projectDAO");
const Project = require("../models/Project");
const router = express.Router();

// Route GET pour récupérer tous les projets
router.get("/projects", (req, res) => {
  const projects = getAllProjects();
  res.json(projects);
});

// Route POST pour ajouter un nouveau projet
router.post("/projects", (req, res) => {
  const { id, title, image, description } = req.body;
  const newProject = new Project(id, title, image, description, link);
  const createdProject = addProject(newProject);
  res.status(201).json(createdProject);
});

module.exports = router;

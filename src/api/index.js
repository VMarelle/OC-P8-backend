const express = require("express");
const router = express.Router();

const { getAllProjects, addProject } = require("../dao/projectDAO");
const Project = require("../models/Project");

const { getAllSkills, addSkill } = require("../dao/skillDAO");
const Skill = require("../models/Skill");

// Route GET pour récupérer tous les projets
router.get("/projects", (req, res) => {
  const projects = getAllProjects();
  res.json(projects);
});
// Route POST pour ajouter un nouveau projet
router.post("/projects", (req, res) => {
  const { id, title, image, description } = req.body;
  const newProject = new Project(id, title, image, description);
  const createdProject = addProject(newProject);
  res.status(201).json(createdProject);
});

router.get("/skills", (req, res) => {
  const skills = getAllSkills();
  res.json(skills);
});

router.post("/skills", (req, res) => {
  const { id, title, image, description, description2, description3 } =
    req.body;
  const newSkill = new Skill(
    id,
    title,
    image,
    description,
    description2,
    description3
  );
  const createdSkill = addSkill(newSkill);
  res.status(201).json(createdSkill);
});

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

module.exports = router;

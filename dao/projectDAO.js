const fs = require("fs");
const path = require("path");
const Project = require("../models/Project");

const filePath = path.join(__dirname, "../projects.json");

// Lire tous les projets
function getAllProjects() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Ajouter un nouveau projet
function addProject(newProject) {
  const projects = getAllProjects();
  projects.push(newProject);
  fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
  return newProject;
}

module.exports = { getAllProjects, addProject };

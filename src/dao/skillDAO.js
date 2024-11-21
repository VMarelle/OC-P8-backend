const fs = require("fs");
const path = require("path");
const Skill = require("../models/Skill");

const filePath = path.join(__dirname, "../skills.json");

function getAllSkills() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function addSkill(newSkill) {
  const skills = getAllSkills();
  skills.push(newSkill);
  fs.writeFileSync(filePath, JSON.stringify(skills, null, 2));
  return newSkill;
}

module.exports = { getAllSkills, addSkill };

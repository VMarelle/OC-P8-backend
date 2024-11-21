const express = require("express");
const { getAllSkills, addSkill } = require("../dao/skillDAO");
const Skill = require("../models/Skill");
const router = express.Router();

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

module.exports = router;

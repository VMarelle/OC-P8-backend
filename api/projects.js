/* const express = require("express");
const app = express();

//importer votre route
const projectsRouter = require("../routes/projects");

app.use("/", projectsRouter);

module.exports = app; */

module.exports = (req, res) => {
  res.json({ message: "Test projects route working!" });
};

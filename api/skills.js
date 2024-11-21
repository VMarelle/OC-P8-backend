const express = require("express");
const app = express();

//importer votre route
const skillsRouter = require("../routes/skills");

app.use("/", skillsRouter);

module.exports = app;

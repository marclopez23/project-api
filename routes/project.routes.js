const express = require("express");
const route = express.Router();
const {
  getProjects,
  getProject,
  updateProject,
  createProject,
  removeProject,
} = require("../controllers/project.controller");

route
  .get("/", getProjects)
  .get("/project/:projectId", getProject)
  .patch("/project/:projectId", updateProject)
  .post("/", createProject)
  .delete("/project/:projectId", removeProject);

module.exports = route;

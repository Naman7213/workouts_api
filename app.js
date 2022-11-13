const express = require("express");
const app = express();
const exercise_routes = require("./api/routes");

app.use("/exercises", exercise_routes);

module.exports = app;

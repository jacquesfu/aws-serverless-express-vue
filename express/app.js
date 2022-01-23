const serverless = require("serverless-http");
const express = require("express");
const app = express();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);

import usersRouter from "./routes/users";
import serverless from "serverless-http";
import express from "express";
import indexRouter from "./routes";

const app = express();
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app)

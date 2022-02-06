import express from "express";
import serverless from "serverless-http";
import statusCheckRoutes from "./routes/status-routes";
import usersRouter from "./routes/users/users";

const app = express();

app.use("/health", statusCheckRoutes);
app.use("/users", usersRouter);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found"
  });
});

module.exports.handler = serverless(app);

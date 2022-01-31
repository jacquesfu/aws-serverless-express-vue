import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  return res.status(200).json({
    message: "Hello from users!",
  });
});

export default router

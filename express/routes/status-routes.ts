import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ message: `Welcome from ${process.env.ENV_MESSAGE}!` });
});

export default router;

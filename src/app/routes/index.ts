import express from "express";
import * as userController from "../controllers/userContoller.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.json({ message: "Starterkit API" });
});

router.get("/users", userController.list);

export default router;

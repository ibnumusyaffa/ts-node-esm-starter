import express from "express";
import * as userController from "app/controllers/userContoller.js";
import { abc } from "@/config/index.js";
const router = express.Router();

router.get("/", (_, res) => {
  res.json({ message: "aaaaasas" });
});

router.get("/users", userController.list);

export default router;

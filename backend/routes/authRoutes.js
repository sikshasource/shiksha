import express from "express";
import { signup, LogIn } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/LogIn", LogIn);

export default router;

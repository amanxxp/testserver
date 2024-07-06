import express from "express";
import { login, logout, signup } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/signup",signup);
router.post("/signin",login);
router.post("/logout",logout);

export default router;
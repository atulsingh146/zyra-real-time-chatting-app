import express from "express";
import { login, logout, signup, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();


// Auth routes
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);


// Protected routes
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check-auth", protectRoute, checkAuth);

export default router;

import { Router } from "express";
import { authenticateToken } from "src/middlewares/auth";
import { authorizeManager } from "src/middlewares/authManager";
import { validate } from "src/middlewares/validate";
import {
  createUser,
  getAllUser,
  getUserByName,
  login,
} from "src/controller/usersController";
import { createUserSchema, loginSchema } from "src/middlewares/usersSchemas";

const router = Router();

// Create user route
router.post("/", validate(createUserSchema), createUser);

// Login user route   route: => /users/login
router.post("/login", validate(loginSchema), login);

// Get all users
router.get("/", authenticateToken, authorizeManager, getAllUser);

// Get user by name   route: => /users/search?name=passNameHere
router.get("/search", authenticateToken, authorizeManager, getUserByName);

export default router;

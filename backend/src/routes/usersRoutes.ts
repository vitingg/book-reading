import { createUser, getAllUser, getUserByName, login } from "src/controller/usersController";
import { Router } from "express";
import { authenticateToken } from "src/middlewares/auth";
import { authorizeManager } from "src/middlewares/authManager";

const router = Router()

// Create user route
router.post("/", createUser)

// Login user route   route: => /users/login
router.post("/login", login)


// Get all users
router.get("/", authenticateToken, authorizeManager, getAllUser)

// Get user by name   route: => /users/search?name=passNameHere
router.get("/search", authenticateToken, authorizeManager, getUserByName)


export default router


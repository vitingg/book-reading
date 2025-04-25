import { Router } from "express";
import { createUser, getAllUser, getUserByName } from "src/controller/usersController";

const router = Router()

router.post("/", createUser)
router.get("/", getAllUser)
router.get("/search", getUserByName)


export default router


import { Router } from "express";
import { createUser, getAllUser } from "src/controller/usersController";

const router = Router()

router.post("/", createUser)
router.get("/", getAllUser)

export default router


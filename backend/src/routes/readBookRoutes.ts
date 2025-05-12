import { Router } from "express";
import {
  markBookAsRead,
  getAllReadBooks,
  getReadsByUserId,
  getReadingRanking,
} from "src/controller/readBookController";

const router = Router();

router.post("/", markBookAsRead);
router.get("/", getAllReadBooks);

router.get("/user/:userId", getReadsByUserId);
router.get("/ranking", getReadingRanking);

export default router;

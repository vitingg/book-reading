import { Router } from "express";
import { upload } from "src/middlewares/upload";
import {
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
  uploadImage,
  getOneBook,
} from "../controller/booksController";

const router = Router();

// creating books route
router.post("/", createBook);

// book image route
router.post("/upload", upload.single("image"), uploadImage);

// listing book route
router.get("/", getAllBooks);

// listing one book route
router.get("/:id", getOneBook);

// updating book route
router.put("/:id", updateBook);

// deleting book route
router.delete("/:id", deleteBook);

export default router;

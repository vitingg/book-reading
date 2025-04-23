import { Router } from "express";
import { createBook, deleteBook, getAllBooks, updateBook, uploadImage } from "../controller/booksController" 
import { upload } from "src/middlewares/upload";


const router = Router()

// creating books route
router.post("/", createBook)

// book image route 
router.post("/upload", upload.single("image"), uploadImage)

// listing book route
router.get("/", getAllBooks)

// updating book route
router.put("/:title", updateBook)

// deleting book route
router.delete("/:title", deleteBook)

export default router
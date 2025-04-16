import { Router } from "express";
import { createBook, deleteBook, getAllBooks, updateBook } from "../controller/booksController" 


const router = Router()

// creating books route
router.post("/", createBook)

// listing book route
router.get("/", getAllBooks)

// updating book route
router.put("/:title", updateBook)

// deleting book route
router.delete("/:title", deleteBook)

export default router
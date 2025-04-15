import 'dotenv/config'
import express from "express"
import booksRouter from "./routes/booksRoutes"
import { createBook, getAllBooks, updateBook, deleteBook } from "./controller/booksController"

const app = express()
const PORT = 3000

app.use(express.json())

app.use("/api", booksRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

console.log('DATABASE_URL:', process.env.DATABASE_URL);

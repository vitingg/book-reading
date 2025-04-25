import readBookRouter from "./routes/readBookRoutes" 
import booksRouter from "./routes/booksRoutes"
import usersRouter from "./routes/usersRoutes"
import express from "express"
import cors from "cors"
import 'dotenv/config'


const app = express()
const PORT = 3000
app.use(cors())


app.use(express.json())

app.use("/api", booksRouter)

app.use("/users", usersRouter)

app.use("/api/read", readBookRouter)
app.use("/uploads", express.static("uploads"));


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
})

console.log('DATABASE_URL:', process.env.DATABASE_URL);

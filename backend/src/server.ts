import 'dotenv/config'
import express from "express"
import booksRouter from "./routes/booksRoutes"
import usersRouter from "./routes/usersRoutes"
import readBookRouter from "./routes/readBookRoutes" 


const app = express()
const PORT = 3000

app.use(express.json())

app.use("/api", booksRouter)
app.use("/users", usersRouter)
app.use("/api/read", readBookRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

console.log('DATABASE_URL:', process.env.DATABASE_URL);

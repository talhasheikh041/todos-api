import express from "express"
import morgan from "morgan"
import { connectDB } from "./utils/connectDb.js"
import todoRoutes from "./routes/todo.routes.js"

const PORT = 3000
const app = express()

connectDB()

app.use(morgan("dev"))
app.use(express.json())

app.get("/", (req, res) => {
   res.send("API working with /api/v1")
})

app.use("/api/v1/todos", todoRoutes)

app.listen(PORT, () => {
   console.log(`Server Listening on http://localhost:${PORT}`)
})

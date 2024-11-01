import express from "express"
import { deleteTodo, getTodos, newTodo, updateTodo } from "../controllers/todo-controllers.js"

const app = express.Router()

app.get("/todos", getTodos)
app.post("/todos/create", newTodo)
app.put("/todos/:id", updateTodo)
app.delete("/todos/:id", deleteTodo)

export default app

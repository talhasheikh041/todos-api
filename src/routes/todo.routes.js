import express from "express"
import { deleteTodo, getTodos, newTodo, updateTodo } from "../controllers/todo.controllers.js"

const app = express.Router()

app.route("/").get(getTodos).post(newTodo)
app.route("/:id").patch(updateTodo).delete(deleteTodo)

export default app

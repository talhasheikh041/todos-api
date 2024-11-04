import express from "express"
import { deleteTodo, getSingleTodo, getTodos, newTodo, updateTodo } from "../controllers/todo.controllers.js"
import { validate } from "../middlewares/validate.js"
import { todoValidationSchema } from "../utils/validation.js"

const app = express.Router()

app.route("/").get(getTodos).post(validate(todoValidationSchema), newTodo)
app.route("/:id").get(getSingleTodo).patch(validate(todoValidationSchema), updateTodo).delete(deleteTodo)

export default app

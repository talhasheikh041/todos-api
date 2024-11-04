import { isValidObjectId } from "mongoose"
import { Todo } from "../models/Todo.js"

export const createTodo = async ({ title, description }) => {
   if (!title || !description) throw new Error("Please provide todo title and description")

   return await Todo.create({ title, description })
}

export const findTodos = async () => {
   const todos = await Todo.find()
   if (!todos.length) throw new Error("No todos found!")
   return todos
}

export const findTodoById = async (id) => {
   if (!isValidObjectId(id)) throw new Error("Invalid Todo ID")

   const todo = await Todo.findById(id)
   if (!todo) throw new Error("Todo not found")
   return todo
}

export const updateTodoById = async (id, { title, description }) => {
   if (!isValidObjectId(id)) throw new Error("Invalid todo ID")

   const updatedTodo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true })
   if (!updatedTodo) throw new Error("Cannot update the todo")
   return updatedTodo
}

export const deleteTodoById = async (id) => {
   if (!isValidObjectId(id)) throw new Error("Invalid todo ID")

   const deletedTodo = await Todo.findByIdAndDelete(id)
   if (!deletedTodo) throw new Error("Todo not found!")
   return deletedTodo
}

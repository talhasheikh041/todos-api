import { isValidObjectId } from "mongoose"
import { Todo } from "../models/Todo.js"

export const newTodo = async (req, res) => {
   try {
      const { title, description } = req.body
      if (!title || !description) {
         throw new Error("Please provide todo title and description")
      }
      const todo = await Todo.create({
         title,
         description,
      })
      res.status(201).json(todo)
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

export const getTodos = async (req, res) => {
   try {
      const todos = await Todo.find()
      if (!todos) {
         throw new Error("No todos found!")
      }
      res.status(200).json({
         todos,
      })
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

export const updateTodo = async (req, res) => {
   try {
      const id = req.params.id
      const { title, description } = req.body

      if (!id || !isValidObjectId(id)) {
         throw new Error("Invalid todo Id")
      }

      const todo = await Todo.findById(id)

      if (title) todo.title = title
      if (description) todo.description = description

      const updatedTodo = await todo.save()

      if (!updatedTodo) throw new Error("Cannot update the todo")

      res.status(200).json({
         message: "Todo updated successfully",
      })
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

export const deleteTodo = async (req, res) => {
   try {
      const id = req.params.id

      if (!id || !isValidObjectId(id)) {
         throw new Error("Invalid todo Id")
      }

      const todo = await Todo.findById(id)

      if (!todo) throw new Error("Todo not found!")

      await todo.deleteOne()

      res.status(200).json({
         message: "Todo deleted successfully",
      })
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

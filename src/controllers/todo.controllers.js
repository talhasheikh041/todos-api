import { createTodo, deleteTodoById, findTodoById, findTodos, updateTodoById } from "../services/todo.services.js"

export const newTodo = async (req, res) => {
   try {
      const { title, description } = req.body
      const todo = await createTodo({ title, description })
      res.status(201).json(todo)
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

export const getTodos = async (req, res) => {
   try {
      const todos = await findTodos()
      res.status(200).json({
         todos,
      })
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

export const getSingleTodo = async (req, res) => {
   try {
      const id = req.params.id
      if (!id) {
         throw new Error("Please provide todo ID")
      }
      const todo = await findTodoById(id)
      res.status(200).json({
         todo,
      })
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

export const updateTodo = async (req, res) => {
   try {
      const id = req.params.id
      const { title, description } = req.body

      if (!id) {
         throw new Error("Please provide todo ID")
      }

      await updateTodoById(id, { title, description })

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

      if (!id) {
         throw new Error("Please provide todo ID")
      }

      await deleteTodoById(id)

      res.status(200).json({
         message: "Todo deleted successfully",
      })
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

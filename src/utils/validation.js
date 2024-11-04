import Joi from "joi"

export const todoValidationSchema = Joi.object({
   title: Joi.string().min(3).max(100).required().messages({
      "string.empty": "Title cannot be empty",
      "string.min": "Title must be at least 3 characters",
      "string.max": "Title cannot exceed 100 characters",
      "any.required": "Title is required",
   }),
   description: Joi.string().min(10).max(300).required().messages({
      "string.empty": "Description cannot be empty",
      "string.min": "Description must be at least 10 characters",
      "string.max": "Description cannot exceed 300 characters",
      "any.required": "Description is required",
   }),
})

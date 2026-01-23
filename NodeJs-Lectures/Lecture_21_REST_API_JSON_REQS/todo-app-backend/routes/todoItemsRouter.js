import express from "express";
import todoItemsRoutes from "../controllers/todoItemsController.js";

export const todoItemsRouter = express.Router();

todoItemsRouter.get("/", todoItemsRoutes.getTodoItem);
todoItemsRouter.post("/", todoItemsRoutes.createTodoItem);
todoItemsRouter.delete("/:id", todoItemsRoutes.deleteTodoItem);
todoItemsRouter.put("/:id/completed", todoItemsRoutes.markCompleted);

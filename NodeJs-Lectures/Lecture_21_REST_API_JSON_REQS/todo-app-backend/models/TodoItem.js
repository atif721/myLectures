import mongoose from "mongoose";

const todoItemSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  completed: {
    type: Boolean,
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("TodoItem", todoItemSchema);

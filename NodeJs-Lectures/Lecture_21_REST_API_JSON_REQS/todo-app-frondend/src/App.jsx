import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ToDoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemFromServer,
  markCompletedOnServer,
} from "./services/itemsServices.js";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemFromServer()
      .then((initialItems) => {
        setTodoItems(initialItems);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    try {
      const item = await addItemToServer(itemName, itemDueDate);
      const newTodoItems = [...todoItems, item];
      setTodoItems(newTodoItems);
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item. Please try again.");
    }
  };

  const handleMarkCompleted = async (id) => {
    try {
      // Optimistic update - update UI immediately
      const newTodoItems = todoItems.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item));
      setTodoItems(newTodoItems);

      // Then sync with server
      const updatedItem = await markCompletedOnServer(id);
      const finalTodoItems = todoItems.map((item) => (item.id === id ? updatedItem : item));
      setTodoItems(finalTodoItems);
    } catch (error) {
      console.error("Error marking item as completed:", error);
      console.error("Error details:", error.message);
      alert(`Failed to mark item as completed: ${error.message}`);
      // Revert the optimistic update on error by refetching
      try {
        const refreshedItems = await getItemFromServer();
        setTodoItems(refreshedItems);
      } catch (refreshError) {
        console.error("Error refetching items:", refreshError);
      }
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const deleteId = await deleteItemFromServer(id);
      const newTodoItems = todoItems.filter((item) => item.id !== deleteId);
      setTodoItems(newTodoItems);
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {loading ?
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        : todoItems.length === 0 ?
          <WelcomeMessage />
        : <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} onMarkCompleted={handleMarkCompleted} />}
      </div>
    </div>
  );
}

export default App;

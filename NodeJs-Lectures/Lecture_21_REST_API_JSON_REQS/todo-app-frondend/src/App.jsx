import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ToDoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { addItemToServer, deleteItemFromServer, getItemFromServer } from "./services/itemsServices.js";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);

    const newTodoItems = [...todoItems, item];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deleteId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deleteId);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></ToDoItems>
    </center>
  );
}

export default App;

import AddTodo from "./components/AddTODO";
import AppName from "./components/AppName";
import ToDoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "08.03.2025",
    },
    {
      name: "Go to college",
      dueDate: "08.03.2025",
    },
    {
      name: "Subscribe",
      dueDate: "Right Now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}

export default App;

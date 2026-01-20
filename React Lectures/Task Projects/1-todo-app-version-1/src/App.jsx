import AddTODO from "./components/AddTODO";
import AppName from "./components/AppName";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";

import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTODO />
      <div className="item-container">
        <ToDoItem1 />
        <ToDoItem2 />
      </div>
    </center>
  );
}

export default App;

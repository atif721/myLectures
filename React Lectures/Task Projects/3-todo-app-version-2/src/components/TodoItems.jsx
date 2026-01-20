import ToDoItem from "./ToDoItem";
const ToDoItems = ({ todoItems }) => {
  return (
    <div className="item-container">
      {todoItems.map((todoItem) => (
        <ToDoItem todoName={todoItem.name} todoDate={todoItem.dueDate}></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;

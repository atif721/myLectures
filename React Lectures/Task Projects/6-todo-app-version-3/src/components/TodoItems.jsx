import Item from "./Item";
const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="item-container">
      {todoItems.map((todoItem) => (
        <Item
          key={todoItem.name}
          todoName={todoItem.name}
          todoDate={todoItem.dueDate}
          onDeleteClick={onDeleteClick}></Item>
      ))}
    </div>
  );
};

export default ToDoItems;

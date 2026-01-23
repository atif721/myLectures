import Item from "./Item";
const ToDoItems = ({ todoItems, onDeleteClick }) => {
  console.log(todoItems);
  return (
    <div className="item-container">
      {todoItems.map((todoItem) => (
        <Item
          key={todoItem.id}
          id={todoItem.id}
          todoName={todoItem.name}
          todoDate={todoItem.dueDate}
          onDeleteClick={onDeleteClick}></Item>
      ))}
    </div>
  );
};

export default ToDoItems;

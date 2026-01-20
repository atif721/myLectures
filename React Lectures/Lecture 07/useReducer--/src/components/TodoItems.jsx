import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import Item from "./Item";
import styles from "./TodoItems.module.css";
function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.item_container}>
      {todoItems.map((todoItem) => (
        <Item
          key={todoItem.name}
          todoName={todoItem.name}
          todoDate={todoItem.dueDate}></Item>
      ))}
    </div>
  );
}

export default TodoItems;

import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";
import styles from "./WelcomeMesg.module.css";

function WelcomeMsg() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className={`${styles.welmsg}`}>All Tasks Completed.Enjoy your Day</p>
    )
  );
}

export default WelcomeMsg;

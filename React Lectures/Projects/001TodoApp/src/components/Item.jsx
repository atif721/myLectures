import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsContext";
import styles from "./Item.module.css";
function Item({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className={`col-6 ${styles.todoName}`}>{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger fs-4"
            onClick={() => deleteItem(todoName)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;

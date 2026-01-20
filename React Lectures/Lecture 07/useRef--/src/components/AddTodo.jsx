import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import styles from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-6">
          <input
            className={styles.inp}
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.inp}
            type="date"
            ref={dueDateElement}
            // value={todoDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success fs-5"
            onClick={handleAddButtonClicked}>
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;

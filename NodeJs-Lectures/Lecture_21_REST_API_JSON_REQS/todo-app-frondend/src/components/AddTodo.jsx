import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value.trim();
    const todoDate = dueDateElement.current.value;

    if (todoName === "") {
      alert("Please enter a task");
      return;
    }

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleAddButtonClicked} className="flex gap-3 flex-col sm:flex-row">
        <input
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          type="text"
          placeholder="What needs to be done?"
          ref={todoNameElement}
        />
        <input
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          type="date"
          ref={dueDateElement}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg">
          <BiMessageAdd className="text-xl" />
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default AddTodo;

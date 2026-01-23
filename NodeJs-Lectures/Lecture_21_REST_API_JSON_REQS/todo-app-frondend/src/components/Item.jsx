import { MdDelete } from "react-icons/md";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import { useState } from "react";

function Item({ id, todoName, todoDate, completed, onDeleteClick, onMarkCompleted }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const isOverdue =
    todoDate && new Date(todoDate) < new Date() && new Date(todoDate).toDateString() !== new Date().toDateString();
  const isToday = todoDate && new Date(todoDate).toDateString() === new Date().toDateString();

  const handleCompleteClick = async () => {
    setIsAnimating(true);
    await onMarkCompleted(id);
    setIsAnimating(false);
  };

  return (
    <div
      className={`mb-4 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden border-l-4 ${
        completed ? "bg-gray-50 border-l-gray-400 opacity-75" : "bg-white border-l-blue-500 hover:border-l-blue-700"
      } ${isAnimating ? "scale-95" : "scale-100"} transform transition-transform duration-300`}>
      <div className="flex items-center justify-between p-4 gap-3">
        <button
          type="button"
          onClick={handleCompleteClick}
          className={`flex-shrink-0 focus:outline-none transition-all hover:scale-110 active:scale-95 ${
            isAnimating ? "animate-pulse" : ""
          }`}>
          {completed ?
            <FiCheckCircle className="text-green-500 text-2xl animate-bounce" />
          : <FiCircle className="text-gray-400 text-2xl hover:text-blue-500" />}
        </button>

        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg font-semibold transition-all duration-300 ${completed ? "text-gray-500 line-through" : "text-gray-800"}`}>
            {todoName}
          </h3>
          <p
            className={`text-sm mt-1 transition-all duration-300 ${
              completed ? "text-gray-400"
              : isOverdue ? "text-red-500 font-semibold"
              : isToday ? "text-orange-500 font-semibold"
              : "text-gray-500"
            }`}>
            {todoDate ?
              <>
                📅{" "}
                {new Date(todoDate).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
                {!completed && isOverdue && " (Overdue)"}
                {!completed && isToday && " (Today)"}
                {completed && " (Completed)"}
              </>
            : "No due date"}
          </p>
        </div>

        <div className="flex-shrink-0 flex gap-2">
          {completed && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded animate-in fade-in duration-300">
              ✓ Done
            </span>
          )}
          <button
            type="button"
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md"
            onClick={() => onDeleteClick(id)}>
            <MdDelete className="text-lg" />
            <span className="hidden sm:inline">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;

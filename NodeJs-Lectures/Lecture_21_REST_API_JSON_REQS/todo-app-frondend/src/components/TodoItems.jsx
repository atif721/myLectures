import Item from "./Item";

const ToDoItems = ({ todoItems, onDeleteClick, onMarkCompleted }) => {
  console.log(todoItems);
  const completedCount = todoItems.filter((item) => item.completed).length;
  const pendingCount = todoItems.length - completedCount;

  const pendingItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  return (
    <div className="space-y-6">
      {todoItems.length > 0 ?
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">📋 Your Tasks</h2>
            <div className="flex gap-4 text-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">📝 {pendingCount}</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                ✓ {completedCount}
              </span>
            </div>
          </div>

          {pendingItems.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Pending Tasks</h3>
              {pendingItems.map((todoItem) => (
                <Item
                  key={todoItem.id}
                  id={todoItem.id}
                  todoName={todoItem.name}
                  todoDate={todoItem.dueDate}
                  completed={todoItem.completed}
                  onDeleteClick={onDeleteClick}
                  onMarkCompleted={onMarkCompleted}
                />
              ))}
            </div>
          )}

          {completedItems.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-600 mb-4">Completed Tasks</h3>
              {completedItems.map((todoItem) => (
                <Item
                  key={todoItem.id}
                  id={todoItem.id}
                  todoName={todoItem.name}
                  todoDate={todoItem.dueDate}
                  completed={todoItem.completed}
                  onDeleteClick={onDeleteClick}
                  onMarkCompleted={onMarkCompleted}
                />
              ))}
            </div>
          )}
        </div>
      : null}
    </div>
  );
};

export default ToDoItems;

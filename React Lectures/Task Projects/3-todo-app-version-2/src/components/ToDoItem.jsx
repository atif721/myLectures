function ToDoItem({ todoName, todoDate }) {
  // let = ;
  // let =;
  return (
    <div className="containter mt-3">
      <div className="row mt-3">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;

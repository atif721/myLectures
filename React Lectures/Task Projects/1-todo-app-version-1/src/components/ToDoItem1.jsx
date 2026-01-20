function ToDoItem1() {
  let todoname = "Buy Milk";
  let toDate = "08.03.2025";
  return (
    <div className="containter mt-3">
      <div className="row mt-3">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{toDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;

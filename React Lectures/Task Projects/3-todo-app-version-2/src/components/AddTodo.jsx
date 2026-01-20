function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-6">
          <input className="inp" type="text" placeholder="Enter TODO Here" />
        </div>
        <div className="col-4">
          <input className="inp" type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

function AddTODO() {
  return (
    <div class="container text-center">
      <div className="row align-items-center">
        <div className="col-6">
          <input type="text" placeholder="Enter TODO Here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
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

export default AddTODO;

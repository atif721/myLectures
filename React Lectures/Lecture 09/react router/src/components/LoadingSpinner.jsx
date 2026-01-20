const LoadingSpinner = () => {
  return (
    <center className="my-5 p-3">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "4rem", height: "4rem", fontWeight: "bold" }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoadingSpinner;

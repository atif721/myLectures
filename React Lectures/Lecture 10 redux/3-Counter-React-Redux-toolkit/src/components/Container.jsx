const Container = ({ children }) => {
  return (
    <center className="">
      <div className="card" style={{ width: "35rem", height: "22rem" }}>
        <div className="card-body">{children}</div>
      </div>
    </center>
  );
};

export default Container;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // let foodItems = [];

  let emptyMessage = foodItems.length === 0 ? <h3>No food items available.</h3> : null;

  // let emptyMessage2 = foodItems.length === 0 && <h3>No food items available.</h3>;
  return (
    <>
      <h2>Healthy Food</h2>
      <ul className="list-group">
        {emptyMessage}
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal", "Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // let foodItems = [];

  return (
    <>
      <h2 className="pr-heading">Healthy Food</h2>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </>
  );
}

export default App;

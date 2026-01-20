import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal", "Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // let foodItems = [];

  return (
    <>
      <Container>
        <h2 className="pr-heading">Healthy Food</h2>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is a healthy food list items</p>
      </Container>
    </>
  );
}

export default App;

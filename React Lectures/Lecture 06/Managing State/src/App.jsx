import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let [foodItems, setFoodItem] = useState(["Ghee", "Apple", "Sabji"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems);
    }
  };

  return (
    <>
      <Container>
        <h2 className="pr-heading">Healthy Food</h2>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is a healthy food list items</p>
      </Container>
    </>
  );
}

export default App;

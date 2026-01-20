import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  let [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplay = calValue + buttonText;
      setCalValue(newDisplay);
    }
    console.log(buttonText);
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;

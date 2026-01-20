import ClockHeading from "./components/ClockHeading";
import ClockSloagan from "./components/ClockSloagan";
import CurrentTime from "./components/CurrentTime";

import "./App.css";

function App() {
  return (
    <center className="mt-5">
      <ClockHeading></ClockHeading>
      <ClockSloagan></ClockSloagan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;

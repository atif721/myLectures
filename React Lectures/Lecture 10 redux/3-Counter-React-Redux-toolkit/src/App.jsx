import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./App.css";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import Privacy from "./components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        {privacy ? <Privacy /> : <DisplayCounter />}
        <Buttons></Buttons>
      </Container>
    </center>
  );
}

export default App;

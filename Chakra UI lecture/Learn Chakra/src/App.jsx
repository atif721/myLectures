import { Heading, Text, Button, Container, Flex } from "@chakra-ui/react";
import "./App.css";
import React from "react";
import { useColorMode } from "./components/ui/color-mode";
import { MdOutlineLightMode } from "react-icons/md";
import YourDetails from "./components/YourDetails/YourDetails";
import Cart from "./components/Cart/Cart";

const App = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <div>
        <Button variant={"outline"} onClick={toggleColorMode}>
          <MdOutlineLightMode />
        </Button>
      </div>
      <Container maxW='container.xl' p='10'>
        <Flex h={{ base: "auto", md: "100vh" }} py={[0, 10, 20]} direction={{ base: "column-reverse", md: "row" }}>
          <YourDetails />
          <Cart />
        </Flex>
      </Container>
    </>
  );
};

export default App;

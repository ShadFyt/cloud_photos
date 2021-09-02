import * as React from "react";
import { Container } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react";

import Image from "./components/image";
import MainNav from "./components/layout/mainNav";

function App() {
  return (
    <ChakraProvider>
      <MainNav />
      <Container maxW="xl">
        <Image />
      </Container>
    </ChakraProvider>
  );
}

export default App;

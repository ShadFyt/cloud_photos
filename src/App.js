import * as React from "react";
import {Stack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react";

import Images from "./components/images";
import MainNav from "./components/layout/mainNav";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <ChakraProvider>
      <MainNav />
      <Stack>
        <LandingPage />
        {/* <Images /> */}
      </Stack>
    </ChakraProvider>
  );
}

export default App;

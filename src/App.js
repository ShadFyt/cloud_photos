import * as React from "react";
import { Box, Stack } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react";

import Images from "./components/images";
import MainNav from "./components/layout/mainNav";

function App() {
  return (
    <ChakraProvider>
      <MainNav />
      <Stack>
        <Images />
      </Stack>
    </ChakraProvider>
  );
}

export default App;

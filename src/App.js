import * as React from "react";
import {
  ChakraProvider,
  Stack,
  useControllableState,
  Text,
} from "@chakra-ui/react";

import Images from "./components/images";
import MainNav from "./components/layout/mainNav";
import LandingPage from "./components/landingPage";

function App() {
  const [isLogin, setIsLogin] = useControllableState({ defaultValue: "" });
  const childToParent = (value) => {
    setIsLogin(value);
  };

  return (
    <ChakraProvider>
      <MainNav childToParent={childToParent} />
      <Stack>{isLogin ? <Images /> : <LandingPage />}</Stack>
    </ChakraProvider>
  );
}

export default App;

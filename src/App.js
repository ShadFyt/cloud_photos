import * as React from "react";
import { ChakraProvider, Stack, useControllableState } from "@chakra-ui/react";

import Images from "./components/image_components/images";
import MainNav from "./components/layout/navComponents/mainNav";
import LandingPage from "./components/landingPageComponents/landingPage";

function App() {
  const [isLogin, setIsLogin] = useControllableState({ defaultValue: false });
  const loginDisplay = (value) => {
    setIsLogin(value);
  };

  return (
    <ChakraProvider>
      <MainNav loginDisplay={loginDisplay} isLoggedIn={isLogin} />
      <Stack>{isLogin ? <Images /> : <LandingPage />}</Stack>
    </ChakraProvider>
  );
}

export default App;

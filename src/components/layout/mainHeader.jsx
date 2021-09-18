import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";

function MainHeader() {
  return (
    <Box
      d={"flex"}
      as={"header"}
      w={"full"}
      h={"200px"}
      bgColor={"gray.300"}
      borderBottomRadius={"3xl"}
    >
      <VStack justifyContent={"center"} mx={"auto"} alignItems={"flex-end"}>
        <Heading
          as={"h1"}
          size={"2xl"}
          colorScheme={"cyan"}
          color={"cyan.800"}
          mx={"auto"}
        >
          Photo Gallery
        </Heading>
        <Heading
          as={"h4"}
          size={"sm"}
          colorScheme={"cyan"}
          color={"cyan.100"}
          mx={"auto"}
        >
          Your Personal Gallery
        </Heading>
      </VStack>
    </Box>
  );
}

export default MainHeader;

import { Box, Flex, useBoolean } from "@chakra-ui/react";
import DownloadButton from "./downloadButton";
import React from "react";

function Photo(props) {
  const [flag, setFlag] = useBoolean();

  const imageUrl = [
    "https://images.unsplash.com/photo-1630692929609-1fbfb477602e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1630573133579-75e54088eb4a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1630595612350-97227aef6cc6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];

  const sizes = ["sm", "xs", "lg"];
  function randNum() {
    let num = Math.floor(Math.random() * 3);
    return num;
  }

  return (
    <Box
      w={"95%"}
      m={"2"}
      borderRadius={"xl"}
      d={"inline-block"}
      h={sizes[randNum()]}
      position={"relative"}
      className="photoBox"
      _before={{
        content: "''",
        borderRadius: "xl",
        boxShadow: "base",
        backgroundImage: `url(${imageUrl[randNum()]})`,
        backgroundSize: "100% 100%",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      }}
      sx={{
        ":hover:before": {
          opacity: ".9",
        },
      }}
      // onMouseEnter ={setFlag.on}
      // onMouseLeave ={setFlag.off}
    >
      <Flex pos={"relative"} justify={"end"}>
        <DownloadButton />
      </Flex>
    </Box>
  );
}

export default Photo;

import { Box } from "@chakra-ui/react";
import MainHeader from "../layout/mainHeader";
import Photo from "./image_component";
function Images() {
  return (
    <Box>
      <Box mx={2}>
        <MainHeader />
      </Box>
      <Box
        padding={4}
        w="100%"
        maxW="1100px"
        mx="auto"
        bg="white"
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </Box>
    </Box>
  );
}

export default Images;

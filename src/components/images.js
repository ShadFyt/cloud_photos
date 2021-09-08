import { Stack, VStack, HStack, Box, Image, SimpleGrid } from "@chakra-ui/react";
import Photo from "./image_componets/image";
function Images() {

    return (

        <Box
            padding={4}
            w="100%"
            maxW="950px"
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
            <Photo />
            <Photo />
            <Photo />
        </Box>

    )
}

export default Images;
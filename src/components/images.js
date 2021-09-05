import { Stack, VStack, HStack, Box, Image, SimpleGrid } from "@chakra-ui/react";
import Photo from "./image_componets/image";
function Images() {

    return (
        // <Stack direction={"column"} spacing={"20px"} alignItems={"center"}>
        //     <HStack spacing={"20px"}>
        //         <VStack maxW={"400px"} spacing={"20px"}>
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //         </VStack>
        //         <VStack maxW={"400px"} spacing={"20px"}>
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //         </VStack>
        //         <VStack maxW={"400px"} spacing={"20px"} >
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //             <Photo />
        //         </VStack>
        //     </HStack>

        // </Stack>
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
import { Stack, VStack, HStack, Box, Image, Flex, Text, Center } from "@chakra-ui/react";



function Photo(props) {

    const imageUrl = [
        "https://images.unsplash.com/photo-1630692929609-1fbfb477602e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1630573133579-75e54088eb4a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1630595612350-97227aef6cc6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ]

    const sizes = ["sm", "md", "lg"]
    function randNum(){
       let num = Math.floor(Math.random() * 3)
       return num
    }

    return (
        // <Flex boxShadow={"dark-lg"} p={"6"} rounded={"md"} bgImage={imageUrl[randNum()]} w={"xs"} h={sizes[randNum()]} bgRepeat={"no-repeat"} backgroundSize={"cover"}>
        // </Flex>
        <Box
            w={"95%"}
            m={"2"}
            boxShadow={"dark-lg"}
            borderRadius={"xl"}
            d={"inline-block"}
            bgImage={imageUrl[randNum()]}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            bgPosition={"center"}
            h={sizes[randNum()]}

        >
            <Center>some text</Center>
        </Box>
    )

}

export default Photo
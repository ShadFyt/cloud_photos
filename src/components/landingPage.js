import {
    Box,
    Flex,
    Heading,
    VStack,
    SimpleGrid
} from "@chakra-ui/react"

function LandingPage(){

    return (
        <Box mx={"auto"} h="100vh" w={"85%"}>
            <Box d={"flex"} as={"header"} w={"full"} h={"200px"} bgColor={"gray.300"}>
                <VStack justifyContent={"center"} mx={"auto"} alignItems={"flex-end"}>
                    <Heading as={"h1"} size={"2xl"} colorScheme={"cyan"} color={"cyan.800"} mx={"auto"}>Photo Gallery</Heading>
                    <Heading as={"h4"} size={"sm"} colorScheme={"cyan"} color={"cyan.100"} mx={"auto"}>Your Personal Gallery</Heading>
                </VStack>
            </Box>
            <Box as={"main"}>
                <SimpleGrid columns={{sm: 2, md: 3}} spacing={10} mt={"20px" }>
                    <Box borderColor={"gray.400"} borderWidth={"3px"} borderRadius={"lg"} height={"230px"} p={2} textAlign={"center"}>
                        <Heading as={"h4"} size={"md"}>Info 1</Heading>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quos. Voluptatibus excepturi voluptatem et corporis voluptate dolorem atque quam a officia soluta libero deleniti tempora ducimus, id esse odio reprehenderit.
                        </Box>
                    <Box boxShadow={"dark-lg"} borderColor={"gray.400"} borderWidth={"3px"} borderRadius={"3xl"}  height="210px" p={2} textAlign={"center"}>
                        <Heading as={"h4"} size={"md"}>Info 2</Heading>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquid aut recusandae ipsam repudiandae architecto consectetur molestiae, amet debitis laudantium, quos quasi neque nisi. Odio at praesentium quaerat labore quia.
                        </Box>
                    <Box borderColor={"gray.400"} borderWidth={"3px"} borderRadius={"2xl"}  height="210px" p={2} textAlign={"center"}>
                        <Heading as={"h4"} size={"md"}>Info 2</Heading>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maxime sequi ab placeat, animi rerum quas amet laborum dolorem exercitationem, labore consequuntur rem quibusdam optio eaque similique quod aperiam illum.
                        </Box>

                </SimpleGrid>
            </Box>

        </Box>
    )
}

export default LandingPage
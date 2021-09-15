import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa";


function PriceBox({ children, shadow }) {
    return (
        <Box
            mb={4}
            shadow={"base"}
            borderWidth={"1px"}
            alignSelf={{ base: "center", md: "center" }}
            borderColor={"gray.200"}
            borderRadius={"2xl"}
            boxShadow={shadow}
        > { children }</Box>
    )
}

function PricingTable() {

    return (
        <Box my={8}>
            <Stack
                direction={{ base: "column", md: "row" }}
                justify={"center"}
                textAlign={"center"}
                spacing={{base: 2, lg: 1}}
            >
                <PriceBox >
                    <VStack w={"250px"} py={8} px={15} >
                        <Heading as={"h3"} fontSize={"large"} fontWeight={"semibold"} textColor={"#a97142"}>Bronze</Heading>
                        <Text fontSize={"2xl"} fontWeight={"bold"}>Free Tier</Text>
                        <List spacing={2}>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                        </List>
                        <Button d={"block"} w={"100%"} colorScheme={"green"} color={"green.200"} textColor={"whiteAlpha.900"}>Sign up</Button>
                    </VStack>
                </PriceBox>
                <PriceBox shadow={"dark-lg"}>
                    <VStack w={"250px"} py={8} px={15}>
                        <Box bgColor={"gray.100"} w={"full"} h={"50px"} alignItems={"center"} justifyContent={"center"} d={"flex"} rounded={"2xl"}>
                           <Heading as={"h3"} fontSize={"large"} fontWeight={"semibold"} textColor={"goldenrod"}>Gold</Heading>
                        </Box>
                        <HStack spacing={0}>
                            <Text fontWeight={"bold"} fontSize={"2xl"}> &#36;50</Text>
                            <Text fontWeight={"hairline"} fontSize={"large"}>/Month</Text>
                        </HStack>
                        <List spacing={2}>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                        </List>
                        <Button d={"block"} w={"100%"} colorScheme={"green"} color={"green.200"} textColor={"whiteAlpha.900"}>Sign up</Button>
                    </VStack>
                </PriceBox>
                <PriceBox>
                    <VStack w={"250px"} py={8} px={15} >
                        <Heading as={"h3"} fontSize={"large"} fontWeight={"bold"} textColor={"#c7c6c4"}>Platinum</Heading>
                        <HStack>
                             <Text fontSize={"2xl"} fontWeight={"bold"}>Free Tier</Text>

                        </HStack>
                        <List spacing={2}>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheck} color={"green.400"}></ListIcon>
                                Some feature                     
                            </ListItem>
                        </List>
                        <Button d={"block"} w={"100%"} colorScheme={"green"} color={"green.200"} textColor={"whiteAlpha.900"}>Sign up</Button>
                    </VStack>
                </PriceBox>
            </Stack>
        </Box>
    )
}

export default PricingTable
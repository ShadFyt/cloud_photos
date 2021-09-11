import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    HStack,
    Heading,
    Text
} from "@chakra-ui/react"


function MainInfo(){

    return (
        <HStack align={"stretch"} spacing={1} justify={"center"} mt={4}>
            <Box boxSize={"lg"} bg={"gray.100"}>
                <Accordion>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex={"1"} textAlign={"left"}>
                                <Text fontSize={"lg"} fontWeight={"black"} fontStyle={"oblique"} fontFamily={"mono"}>Photo storage on the go</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel p={4}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ducimus corporis dolorum sunt deleniti 
                            dolores voluptas laborum consequatur perspiciatis, omnis ratione magnam fugiat ea nostrum autem recusandae tempora hic.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex={"1"} textAlign={"left"}>
                                <Text fontSize={"lg"} fontWeight={"black"} fontStyle={"oblique"} fontFamily={"mono"}>Photo lookup made easy</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo temporibus nostrum numquam vero reprehenderit, 
                            aspernatur et ratione ab, amet hic labore consequuntur cum natus est architecto itaque ullam, maiores distinctio.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex={"1"} textAlign={"left"}>
                                <Text fontSize={"lg"} fontWeight={"black"} fontStyle={"oblique"} fontFamily={"mono"}>Securely share your photos</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat corporis accusamus, sunt placeat cum 
                            similique praesentium quod maxime odio, a odit doloribus nostrum saepe. Corporis eos delectus amet cum nam.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex={"1"} textAlign={"left"}>
                                <Text></Text>

                            </Box>
                        </AccordionButton>
                    </AccordionItem>
                </Accordion>
            </Box>
            <Box boxSize={"lg"} bg={"gray.700"}>

            </Box>
        </HStack>
    )
}

export default MainInfo
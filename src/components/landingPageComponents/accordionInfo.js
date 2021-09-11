import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

function MainInfo() {
  return (
    <HStack align={"stretch"} spacing={1} justify={"center"} mt={4}>
      <Box w={"full"} h={"400px"} bg={"ghostwhite"}>
        <Accordion>
          <AccordionItem>
            <AccordionButton>
              <Box flex={"1"} textAlign={"left"}>
                <Text
                  fontSize={"lg"}
                  fontWeight={"hairline"}
                  fontStyle={"oblique"}
                  fontFamily={"mono"}
                >
                  Photo storage on the go
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={4}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              doloribus ducimus corporis dolorum sunt deleniti dolores voluptas
              laborum consequatur perspiciatis, omnis ratione magnam fugiat ea
              nostrum autem recusandae tempora hic.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex={"1"} textAlign={"left"}>
                <Text
                  fontSize={"lg"}
                  fontWeight={"hairline"}
                  fontStyle={"oblique"}
                  fontFamily={"mono"}
                >
                  Photo lookup made easy
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              temporibus nostrum numquam vero reprehenderit, aspernatur et
              ratione ab, amet hic labore consequuntur cum natus est architecto
              itaque ullam, maiores distinctio.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex={"1"} textAlign={"left"}>
                <Text
                  fontSize={"lg"}
                  fontWeight={"hairline"}
                  fontStyle={"oblique"}
                  fontFamily={"mono"}
                >
                  Securely share your photos
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              corporis accusamus, sunt placeat cum similique praesentium quod
              maxime odio, a odit doloribus nostrum saepe. Corporis eos delectus
              amet cum nam.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex={"1"} textAlign={"left"}>
                <Text
                  fontSize={"lg"}
                  fontWeight={"hairline"}
                  fontStyle={"oblique"}
                  fontFamily={"mono"}
                >
                  Download anywhere
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              ipsum. Illum minima nulla officia expedita est eos velit,
              praesentium, excepturi, quod laboriosam architecto consequuntur
              reiciendis assumenda similique vel nesciunt corrupti.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box w={{ md: "full" }} h={"400px"}>
        <Image
          w={"full"}
          h={"full"}
          d={{ sm: "none", md: "flex" }}
          alt={"photo gallery"}
          src={
            "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGdhbGxlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        />
      </Box>
    </HStack>
  );
}

export default MainInfo;

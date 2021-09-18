import {
  Box,
  Icon,
  Stack,
  Button,
  VStack,
  HStack,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { DiGithubFull } from "react-icons/di";
import { ImYoutube2 } from "react-icons/im";

function Footer() {
  return (
    <Box
      w={"full"}
      bgGradient="linear(to-r, gray.400, cyan.700 40%, cyan.200)"
      borderTopRadius={"lg"}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"space-around"}
        spacing={4}
        mb={5}
      >
        <VStack>
          <Text
            fontSize={"2xl"}
            fontWeight={"500"}
            fontFamily={"sans-serif"}
            textColor={"whitesmoke"}
          >
            About us
          </Text>
          <Link fontSize={"larger"} textColor={"gray.300"}>
            Get to know us
          </Link>
          <Link fontSize={"larger"} textColor={"gray.300"}>
            Compare Tiers
          </Link>
          <Link fontSize={"larger"} textColor={"gray.300"}>
            {" "}
            Filler text{" "}
          </Link>
        </VStack>
        <VStack>
          <Text
            fontSize={"2xl"}
            fontWeight={"500"}
            fontFamily={"sans-serif"}
            textColor={"whitesmoke"}
          >
            Need help?
          </Text>
          <Link fontSize={"larger"} textColor={"gray.300"}>
            Contact
          </Link>
          <Link fontSize={"larger"} textColor={"gray.300"}>
            Sitemap
          </Link>
          <Link fontSize={"larger"} textColor={"gray.300"}>
            {" "}
            FAQ
          </Link>
        </VStack>
        <VStack>
          <Text
            fontSize={"2xl"}
            fontWeight={"500"}
            fontFamily={"sans-serif"}
            textColor={"whitesmoke"}
          >
            Location
          </Text>
        </VStack>
      </Stack>
      <Divider />
      <HStack justify={"space-around"}>
        <Text ml={3} fontWeight={"100"} fontFamily={"sans-serif"}>
          email will go here?
        </Text>
        <VStack>
          <Text mr={5}>Connect with us</Text>
          <HStack spacing={3}>
            <Link href={"#"} isExternal>
              <Icon as={FiLinkedin} boxSize={"9"} p={1} />
            </Link>
            <Link href={"#"} isExternal>
              <Icon as={DiGithubFull} boxSize={"9"} />
            </Link>
            <Link href={"#"} isExternal>
              <Icon as={FiTwitter} boxSize={"9"} p={1} />
            </Link>
            <Link href={"#"} isExternal>
              <Icon as={ImYoutube2} boxSize={"9"} />
            </Link>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Footer;

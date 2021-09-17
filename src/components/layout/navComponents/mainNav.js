import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useControllableState,
  Stack,
  Button,
  Icon,
  Tooltip,
  useToast,
  VisuallyHidden,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineLogout } from "react-icons/ai";

import LoginModal from "./loginModal";
import SignUpDrawer from "./signUpDrawer";

function MainNav({ loginDisplay }) {
  const [isLogin, setIsLogin] = useControllableState({ defaultValue: false });
  const logoutToast = useToast();
  const loginValue = (value) => {
    setIsLogin(value);
  };
  const logout = () => {
    setIsLogin(false);
    loginDisplay(false);
    logoutToast({
      title: "Logout successful",
      status: "success",
      duration: 2000,
      isClosable: true,
      label: "toast",
    });
  };
  const Links = ["Home", "About", "Contact"];
  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as={"nav"}
        zIndex={"overlay"}
        bgPosition={"sticky top"}
        mb={"2"}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack spacing={3}>
              {!isLogin ? (
                <LoginModal
                  loginDisplay={loginDisplay}
                  loginValue={loginValue}
                />
              ) : (
                <Tooltip
                  label="Logout"
                  aria-label={"tool-tip for logout"}
                  fontSize={"sm"}
                  rounded={"full"}
                >
                  <Button
                    colorScheme={"cyan"}
                    textColor={"cyan.300"}
                    variant={"ghost"}
                    size={"lg"}
                    rightIcon={<Icon as={AiOutlineLogout} />}
                    onClick={() => {
                      logout();
                    }}
                  >
                    <VisuallyHidden>Logout</VisuallyHidden>
                  </Button>
                </Tooltip>
              )}
              {!isLogin && <SignUpDrawer />}
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default MainNav;

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineLogin } from "react-icons/ai";

function LoginModal({ loginDisplay, loginValue }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnClick = function () {
    onClose();
    loginDisplay(true);
    loginValue(true);
  };

  return (
    <>
      <Button
        colorScheme={"cyan"}
        variant={"ghost"}
        textColor={"cyan.800"}
        onClick={onOpen}
        leftIcon={<Icon as={AiOutlineLogin} />}
      >
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf={"center"} as={"em"}>
            Login
          </ModalHeader>
          <ModalCloseButton textColor={"blackAlpha.700"} />
          <ModalBody p={4}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input placeholder={"Username"} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder={"Password"} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"cyan"}
              variant={"solid"}
              bgColor={"cyan.400"}
              onClick={() => btnClick()}
            >
              Login
            </Button>
            <Button onClick={onClose} ml={4}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;

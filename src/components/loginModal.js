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
  } from "@chakra-ui/react"


function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button 
                colorScheme={"cyan"}
                variant={"ghost"}
                textColor={"cyan.300"}
                onClick={onOpen}
                >Login
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader alignSelf={"center"} as={"em"}>Login</ModalHeader>
                    <ModalCloseButton textColor={"red.400"}/>
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
                        <Button colorScheme={"cyan"} variant={"solid"} bgColor={"cyan.300"}>Login</Button>
                        <Button onClick={onClose} ml={4}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default LoginModal;
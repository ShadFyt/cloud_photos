import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    Center,
    Stack,
    Divider,
    VStack,
    Box,
  } from "@chakra-ui/react"
  import * as React from "react";


function SignUpDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button colorScheme={"cyan"} variant={"solid"} bgColor={"cyan.300"} onClick={onOpen}>Sign Up</Button>
            <Drawer isOpen={isOpen} placement={"right"} onClose={onClose} finalFocusRef={btnRef} size={"sm"}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader as={"em"} p={"5"}>Sign Up</DrawerHeader>
                    <Divider />

                    <DrawerBody>
                        <Stack spacing={"20px"}>
                            <HStack spacing={"20px"}>
                                <FormControl id="first-name">
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" placeholder="First name" />
                                </FormControl>
                                <FormControl id="last-name">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" placeholder="Last name" />
                                </FormControl>
                            </HStack>
                            <HStack>
                                <FormControl id="country">
                                    <FormLabel>Country</FormLabel>
                                    <Select placeholder={"Select a country"} size={"md"}>
                                        <option>Canada</option>
                                        <option>US</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                        <option>China</option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Date Of Birth</FormLabel>
                                    <Input type={"date"}></Input>
                                </FormControl>
                            </HStack>
                            <Center>
                                <FormControl id="email" isRequired>
                                    <Input type={"email"} placeholder={"Email"} />
                                </FormControl>
                            </Center>
                            <VStack>
                                <FormControl id="password">
                                        <FormLabel>Password: </FormLabel>
                                        <Input type={"password"} placeholder="Enter a password" />
                                </FormControl>
                                <FormControl>
                                    <Input type={"password"} placeholder={"RE enter password"}/>
                                </FormControl>
                            </VStack>
                        </Stack>

                    </DrawerBody>
                    <DrawerFooter>
                        <HStack>
                            <Button type={"submit"} colorScheme={"green"} >Sign Up</Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SignUpDrawer
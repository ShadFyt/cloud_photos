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
  } from "@chakra-ui/react"

function SignUpDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button colorScheme={"cyan"} variant={"solid"} bgColor={"cyan.300"}>Sign Up</Button>
            <Drawer></Drawer>
        </>
    )
}
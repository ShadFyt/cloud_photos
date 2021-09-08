import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import LoginModal from '../loginModal';
import SignUpDrawer from '../signUpDrawer';

function MainNav() {
    const Links = ['Home', 'About', 'Contact Us'];
    const NavLink = ({ children }) => (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Link>
    )
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box mb={"4"} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
              <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                  size={'md'}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: 'none' }}
                  onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                  <Box>Logo</Box>
                  <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                      <NavLink key={link}>{link}</NavLink>
                    ))}
                  </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                  <HStack spacing={3}>
                    <LoginModal />
                    <SignUpDrawer />
                  </HStack>
                </Flex>
              </Flex>
              {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                  <Stack as={'nav'} spacing={4}>
                    {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                    ))}
                  </Stack>
                </Box>
              ) : null}  

            </Box>
                    
      </>
    )
}

export default MainNav;
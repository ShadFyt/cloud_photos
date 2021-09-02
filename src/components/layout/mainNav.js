import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

function MainNav() {
    const Links = ['Home', 'Pricing', 'About'];
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
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
              <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
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
                    <Box>Login</Box>
                </Flex>
              </Flex>
                    
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            </Box>
                    
      </>
    )
}

export default MainNav;
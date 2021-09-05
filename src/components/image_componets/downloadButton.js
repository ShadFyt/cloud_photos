import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    Button,
  } from "@chakra-ui/react"

import { ChevronDownIcon } from '@chakra-ui/icons'


function DownloadButton(props){

    return (
        <Menu>
            <MenuButton m={2} as={Button} rightIcon={<ChevronDownIcon />} variant={"outline"}>
                Download
            </MenuButton>
            <MenuList>
                <MenuItem>SM</MenuItem>
                <MenuItem>MD</MenuItem>
                <MenuItem>LG</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default DownloadButton
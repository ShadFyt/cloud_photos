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
    IconButton,
    Icon,
  } from "@chakra-ui/react"

import { ChevronDownIcon } from '@chakra-ui/icons'
import {AiOutlineCloudDownload} from 'react-icons/ai'


function DownloadButton(props){

    return (
        <Menu>
            <MenuButton m={2}>
                <IconButton icon={<AiOutlineCloudDownload />} variant={"ghost"} fontSize={"2xl"}/>
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
import { Menu, MenuButton, MenuList, MenuItem, Icon } from "@chakra-ui/react";

import { AiOutlineCloudDownload } from "react-icons/ai";

function DownloadButton(props) {
  return (
    <Menu>
      <MenuButton m={2}>
        <Icon as={AiOutlineCloudDownload} variant={"ghost"} fontSize={"2xl"} />
      </MenuButton>
      <MenuList>
        <MenuItem>SM</MenuItem>
        <MenuItem>MD</MenuItem>
        <MenuItem>LG</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default DownloadButton;

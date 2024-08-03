import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


function SortSelector(props) {
    return (
        <Menu>
            <MenuButton as = {Button} rightIcon={<BsChevronDown/>} >
           order by relevance
            </MenuButton>
           <MenuList>
            <MenuItem>
            hello
            </MenuItem>
            <MenuItem>
            hello
            </MenuItem><MenuItem>
            hello
            </MenuItem>
           </MenuList>
           </Menu>

    );
}

export default SortSelector;
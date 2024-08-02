import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/UsePlatform";

function PlatformSelector() {

    const {data, error} = usePlatforms();

    if (error) return null;

    return (
           <Menu>
            <MenuButton as = {Button} rightIcon={<BsChevronDown />} >
           Platforms
           <MenuList>
            {
                data.map((platform) => {
                    return <MenuItem key={platform.id}>{platform.name}</MenuItem>
                })
            }
           </MenuList>
            </MenuButton>
           </Menu> 
    );
}

export default PlatformSelector;
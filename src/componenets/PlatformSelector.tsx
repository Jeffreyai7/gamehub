import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/UsePlatform";
import { Platform } from "../hooks/useGames";

interface Props{
    onSelectedPlatform: (platform : Platform) => void,
    selectedPlatform: Platform | null
}


function PlatformSelector({onSelectedPlatform, selectedPlatform}: Props) {

    const {data, error} = usePlatforms();

    if (error) return null;

    return (
           <Menu>
            <MenuButton as = {Button} rightIcon={<BsChevronDown/>} >
           {selectedPlatform?.name || "Platforms" }
           <MenuList>
            {
                data.map((platform) => {
                    return <MenuItem key={platform.id}  onClick={() => onSelectedPlatform(platform)}  >{platform.name}</MenuItem>
                })
            }
           </MenuList>
            </MenuButton>
           </Menu> 
    );
}

export default PlatformSelector;
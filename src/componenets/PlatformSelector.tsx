import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/UsePlatform";



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
            </MenuButton>
           <MenuList>
            {
                data?.results.map((platform) => {
                    return <MenuItem key={platform.id}  onClick={() => onSelectedPlatform(platform)}  >{platform.name}</MenuItem>
                })
            }
           </MenuList>
           </Menu> 
    );
}

export default PlatformSelector;
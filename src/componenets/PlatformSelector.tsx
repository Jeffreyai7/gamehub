import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
// import usePlatform from "../hooks/usePlatform";


function PlatformSelector() {
   const {data, error} = usePlatforms();
   const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
   const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)

    const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)
//    const selectedPlatform = usePlatform(selectedPlatformId)
    
   if (error) return null;

   return (
           <Menu>
            <MenuButton as = {Button} rightIcon={<BsChevronDown/>} >
           {selectedPlatform?.name || "Platforms" }
            </MenuButton>
           <MenuList>
            {
                data?.results.map((platform) => {
                    return <MenuItem key={platform.id}  onClick={() => setSelectedPlatformId(platform.id)}  >{platform.name}</MenuItem>
                })
            }
           </MenuList>
           </Menu> 
    );
}

export default PlatformSelector;
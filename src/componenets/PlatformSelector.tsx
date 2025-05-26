import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform = data?.results.find(
    (p: any) => p.id === selectedPlatformId
  );
  //    const selectedPlatform = usePlatform(selectedPlatformId)

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform: any) => {
          return (
            <MenuItem
              key={platform.id}
              onClick={() => setSelectedPlatformId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;

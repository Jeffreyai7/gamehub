import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void
}

function NavBar({onSearch} : Props) {
    return (
        <HStack bgColor={"inherit"}>
            <Image src={logo} boxSize="60px" />
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
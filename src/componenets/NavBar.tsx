import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
    return (
        <HStack bgColor={"inherit"}>
            <Image src={logo} boxSize="60px" />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
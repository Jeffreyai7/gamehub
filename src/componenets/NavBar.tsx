import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/images/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
    return (
        <HStack paddingX={4} position={"fixed"} top={0} left={0} right={0} zIndex={999} bgColor={"initial"}>
            <Image src={logo} boxSize="60px" />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
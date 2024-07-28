import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
    return (
        <HStack justifyContent="space-between" >
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
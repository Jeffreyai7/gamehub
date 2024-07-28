import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";


function ColorModeSwitch() {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <HStack>
            <Switch colorScheme="green" isChecked= {colorMode === 'dark'} onChange={toggleColorMode} />
            <Text>Dark Mode</Text>
        </HStack>
    );
}

export default ColorModeSwitch;






// c7b18323a47d40c394ea5b019646b1f5

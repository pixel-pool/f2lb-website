import { Box, Flex, Text, Image, Button, useColorModeValue} from "@chakra-ui/react";
import logoLight from "../assets/f2lbLogoLight.png";
import logoDark from "../assets/f2lbLogoDark.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useEffect } from "react";

export function Header()
{
    const logo = useColorModeValue(logoLight, logoDark)

    return(
        <Box p={4} px={10}>
            <Flex justifyContent={'space-between'} alignItems={"center"}>
                <Flex alignItems={'center'} >
                    <Image boxSize='100px' objectFit="cover" src={logo} alt="pixel pools logo" p={2} className="App-logo"/>
                </Flex>

                <Flex alignItems={'center'}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Flex>
            </Flex>
        </Box>
    )
}
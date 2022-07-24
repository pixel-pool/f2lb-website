import { Box, Flex, Text, Image, Button} from "@chakra-ui/react";
import logo from "../assets/f2lbLogo.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export function Header()
{
    return(
        <Box p={4}>
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
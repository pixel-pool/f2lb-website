import { Box, Flex, Text, Image, Button, Container, useColorModeValue, Link, VStack, Center} from "@chakra-ui/react";
import { useState } from "react";
import logo from "../assets/f2lbLogo.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Palette } from "../theme";
import { Pools } from "./Pools";
import { Supporters } from "./Supporters";
import { ExternalLinkIcon } from '@chakra-ui/icons'



export const enum DisplayMode {
    pools = "pools",
    supporters = "supporters"
}

export function Mode()
{
    const [mode, setMode] = useState(DisplayMode.pools)
    //const btnColor = useColorModeValue('', 'blue')

    return(
        <Container>
            <Text fontSize="2xl">First 2 Lifetime Block community rotation</Text>
            <VStack>
            <Link href="https://discord.com/invite/avwxmpyNKf">
                Discord
                <ExternalLinkIcon mx='2px'/>
            </Link>
            </VStack>

            <VStack>
            <Link href="https://github.com/pixel-pool/f2lb-backend/issues">
                Issues 
                <ExternalLinkIcon mx='2px'/>
            </Link>
            </VStack>

            <Flex justifyContent={'space-between'} alignItems={"center"} marginTop={6}>
                    <Button bg={Palette.primary.f2lbBlue} minWidth={130} onClick={() => {setMode(DisplayMode.pools)}}>Pools</Button>
                    <Button bg={Palette.primary.f2lbBlue} minWidth={130} onClick={() => {setMode(DisplayMode.supporters)}}>Supporters</Button>
            </Flex>
            { mode === DisplayMode.pools ? (<Pools/>): null}
            { mode === DisplayMode.supporters ? (<Supporters/>): null}            
        </Container>
    )
}
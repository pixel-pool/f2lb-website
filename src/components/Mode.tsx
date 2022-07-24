import { Box, Flex, Text, Image, Button, Container, useColorModeValue} from "@chakra-ui/react";
import { useState } from "react";
import logo from "../assets/f2lbLogo.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Palette } from "../theme";
import { Pools } from "./Pools";
import { Supporters } from "./Supporters";



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
            <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Button bg={Palette.primary.f2lbBlue} minWidth={130} onClick={() => {setMode(DisplayMode.pools)}}>Pools</Button>
                    <Button bg={Palette.primary.f2lbBlue} minWidth={130} onClick={() => {setMode(DisplayMode.supporters)}}>Supporters</Button>
            </Flex>
            { mode === DisplayMode.pools ? (<Pools/>): null}
            { mode === DisplayMode.supporters ? (<Supporters/>): null}            
        </Container>
    )
}
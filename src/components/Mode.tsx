import { Box, Flex, Text, Image, Button, Container} from "@chakra-ui/react";
import { useState } from "react";
import logo from "../assets/f2lbLogo.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Pools } from "./Pools";
import { Supporters } from "./Supporters";



export const enum DisplayMode {
    pools = "pools",
    supporters = "supporters"
}

export function Mode()
{
    const [mode, setMode] = useState(DisplayMode.pools)
    return(
        <Container>
            <Flex justifyContent={'space-between'} alignItems={"center"}>
                    <Button minWidth={130} onClick={() => {setMode(DisplayMode.pools)}}>Pools</Button>
                    <Button minWidth={130} onClick={() => {setMode(DisplayMode.supporters)}}>Supporters</Button>
            </Flex>
            { mode === DisplayMode.pools ? (<Pools/>): null}
            { mode === DisplayMode.supporters ? (<Supporters/>): null}            
        </Container>
    )
}
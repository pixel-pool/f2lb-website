import { Box, Flex, Text, Image, Button, Container} from "@chakra-ui/react";
import { useState } from "react";
import logo from "../assets/f2lbLogo.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export function Supporters()
{
    return(
        <Container>
            <Text marginTop={6} fontSize='2xl'>
                Supporters list (coming soon)
            </Text>
            <Box h='50vh'/>
        </Container>
    )
}
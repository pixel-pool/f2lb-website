import { Box, Flex, Text, Image, Button, useColorModeValue, Container} from "@chakra-ui/react";
import logoLight from "../assets/f2lbLogoLight.png";
import logoDark from "../assets/f2lbLogoDark.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useEffect } from "react";

export function Footer()
{
    const year = new Date().getFullYear();

    return(
        <Container as="footer" p={4} px={10}>
            <Flex justifyContent={'space-between'} alignItems={"center"}>
                <Flex alignItems={'center'} >
                    <Text fontSize='md'>{`©${year} f2lb.info `}</Text>
                </Flex>

                <Flex alignItems={'center'}>
                    <Text fontSize='xs'>dev=[PIXEL], admin=[STPZ1]</Text>
                </Flex>
            </Flex>
        </Container>
    )
}
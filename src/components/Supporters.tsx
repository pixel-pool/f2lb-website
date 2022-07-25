import { useQuery } from "@apollo/client";
import { Box, Flex, Text, Image, Button, Container, useColorModeValue, Center, VStack, Icon} from "@chakra-ui/react";
import { parse } from "querystring";
import { useEffect, useState } from "react";
import logo from "../assets/f2lbLogo.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { GET_SUPPORTERS } from "../graphql/queries";
import { Palette } from "../theme";

interface Supporter {
    alias:string,
    status:number,
    wallet:{
        amount:number,
        delegationTicker:string,
    }
}


export function Supporters()
{
    // style
    const bg = useColorModeValue(Palette.secondary.f2lbBlue, Palette.secondary.f2lbBlue)
    const bgSecond = useColorModeValue(Palette.primary.f2lbBlue, Palette.primary.f2lbBlue)

    // 
    const [supporters, setSupporters] = useState<Supporter[]>([]);
    const {loading, error, data} = useQuery<any>(GET_SUPPORTERS);

    useEffect(()=>{
        if(data)
        {
            const ordered = [...data.supporters].sort(function(a:Supporter, b:Supporter){
                return b.wallet.amount - a.wallet.amount;
            });
            setSupporters(ordered)
        }
    },[data])

    function emojiForStake(amount:number){
        if (amount > 400000000000){
            return '🐋'
        }
        if (amount > 100000000000){
            return '🐬'
        }
        if (amount > 10000000000){
            return '🦞'
        }

        return '😎'
    }

    return(

        <Container marginTop={6} p={0}>
            <VStack spacing={4}>
                {supporters.map(p => {
                    return(
                        <Box key={p.alias} bg={bg} p={2} borderRadius={15} w={"100%"}>
                            <Flex w={'100%'}>
                                <Center p={2}>
                                </Center>

                                <Text fontSize='2xl'  minW={150}>{(p.alias).split('#')[0]}</Text>

                                <Box w="100%">
                                    <Text textAlign='right' px={4}>{emojiForStake(p.wallet.amount)}</Text>
                                    <Text>{`${(p.wallet.amount / 1000000).toFixed(2)} ₳`}</Text>
                                    <Text>{p.wallet.delegationTicker}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    )
                })}
            </VStack>
        </Container>
    )
}
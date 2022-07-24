import { useQuery} from "@apollo/client";
import { Box, Flex, Text, Image, Button, Container, useColorMode, useColorModeValue, VStack, Avatar, HStack, Center, AvatarBadge} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { isConstructorDeclaration } from "typescript";
import logo from "../assets/f2lbLogo.png"
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import {GET_POOLS} from "../graphql/queries"
import { Palette } from "../theme";

interface Pool {
    ticker:string,
    queuePos:number,
    description:string,
    imageUrl:string,
    status:number,
    wallet:{
        amount:number,
        delegationTicker:string,
    }
}

export function Pools()
{
    // style
    const bg = useColorModeValue(Palette.secondary.f2lbBlue, Palette.secondary.f2lbBlue)
    const bgSecond = useColorModeValue(Palette.primary.f2lbBlue, Palette.primary.f2lbBlue)

    // 
    const [pools, setPools] = useState<Pool[]>([]);
    const {loading, error, data} = useQuery<any>(GET_POOLS);

    useEffect(()=>{
        if(data)
        {
            setPools(data.pools)
        }
    },[data])

    if (!pools){
        return null
    }

    console.log(pools);
    console.log(typeof(pools));

    return(
        <Container marginTop={6} p={0}>
            <VStack spacing={4}>
                {pools.map(p => {
                    return(
                        <Box key={p.ticker} bg={bg} p={2} borderRadius={15} w={"100%"}>
                            <Flex w={'100%'}>
                                <Center p={2}>
                                    <Avatar  size='xl' name={p.ticker} src={p.imageUrl} bg={bgSecond}>
                                        <AvatarBadge boxSize='1em' bg={p.wallet.delegationTicker === 'ANTRX' ? 'green.500' : 'red.500'} />
                                    </Avatar>
                                </Center>

                                <Text fontSize='2xl'  minW={90}>{p.ticker}</Text>

                                <Box w="100%">
                                    <Text textAlign='right' px={4}>{p.queuePos}</Text>
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
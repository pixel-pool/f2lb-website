import { useQuery} from "@apollo/client";
import { Box, Flex, Text, Image, Button, Container, useColorMode, useColorModeValue, VStack, Avatar} from "@chakra-ui/react";
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
    wallet:{
        amount:number,
        delegation:string,
    }
}

export function Pools()
{
    // style
    const bg = useColorModeValue(Palette.box.light, Palette.box.dark)
    const bgSecond = useColorModeValue(Palette.box.light2, Palette.box.light2)

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
        <Container marginTop={4}>
            <VStack>
                {pools.map(p => {
                    return(
                    <Box key={p.ticker} bg={bg} p={2} borderRadius={15} w={"100%"}>
                        <Avatar name={p.ticker} src={p.imageUrl} bg={bgSecond}/>
                        <Text>{p.ticker}</Text>
                        <Text>{p.queuePos}</Text>
                        <Text>ADA {(p.wallet.amount / 1000000).toFixed(2)}</Text>
                        <Text>Delegation {p.wallet.delegation}</Text>
                    </Box>
                    )
                })}
            </VStack>
        </Container>
    )
}
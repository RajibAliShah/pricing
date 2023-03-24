import React from 'react'
import {Box, Heading, Text } from "@chakra-ui/react";
export default function Header (){
    return (
            <Box textAlign={{base:'left', md:'center'}} 
            pl="10px" bg="#6B46C1" pt="90px" pb="200px" color="white"  >
            <Heading pb="10px">Simple pricing for your business</Heading>
            <Text>Plans that are carefully crafted to suit your business.</Text>

            </Box>
    );
}
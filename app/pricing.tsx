import { Box, Flex, Text, Heading, Button, HStack, Icon} from "@chakra-ui/react"
import checkMarkIcon from "./icons/checkMarkIcon"
import React from 'react'

export default function Pricing () {
    return( 
        <Box maxW="950px" 
        ml={{base:'20px', lg:'auto'}}
        mr={{base:'20px', lg:'auto'}} 
        mt="-150" 
        bg="white" 
        borderRadius={"16px"} 
        overflow="hidden" 
        boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"}>
            <Flex direction={{base: 'column', md: 'column', lg:'row'}}>
                
<Box bg="purple.100" p="60px" textAlign={"center"}>
<Text fontSize={"24px"} fontWeight="Bold">Premium PRO</Text>
<Heading fontSize={"60px"} >$329</Heading>
<Text>billed just once</Text>
<Button mt="10px" w="200px" color="white" bg={"#805AD5"}>Get Started</Button>
</Box>
<Box pt={"50px"} pl="25px">
<Text mb="10px">Access these features when you get this pricing package for your business.</Text>    
<HStack mb="15px">
    <Icon as={checkMarkIcon}></Icon>
    <Text >International calling and messaging API</Text>
</HStack>
<HStack mb="15px">
    <Icon as={checkMarkIcon}></Icon>
    <Text >Additional phone numbers</Text>
</HStack>
<HStack mb="15px">
    <Icon as={checkMarkIcon}></Icon>
    <Text >Automated messages via Zapier</Text>
</HStack>
<HStack mb="15px">
    <Icon as={checkMarkIcon}></Icon>
    <Text >24/7 support and consulting</Text>
</HStack>

</Box>
</Flex>
        </Box>
    )
}
'use client'
import Header from "./Header"
import Pricing from "./pricing"
import Features from "./icons/features" 

import { ChakraProvider, } from '@chakra-ui/react'




export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  )
}

'use client';

import { ChakraProvider } from '@chakra-ui/react';
import Feature from './Feature';
import Header from './header';
import Pricing from './Pricing';

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Pricing />
        <Feature />
      </ChakraProvider>
    </>
  );
}

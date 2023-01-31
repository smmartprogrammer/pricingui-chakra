import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box
      textAlign={{ base: 'left', md: 'left', lg: 'center' }}
      bg="#6B46C1"
      pt="90px"
      pb="250px"
      color="white"
    >
      <Text pt="10px">Partab - Pricing UI using Chakra</Text>

      <Heading>Simple pricing for your business</Heading>
      <Text pt="10px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}

import React from 'react';
import Icon1 from './Icon1';
import Icon2 from './Icon2';
import Icon3 from './Icon3';

import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  HStack,
  Icon,
} from '@chakra-ui/react';

export default function Feature() {
  return (
    <Box maxW={'800px'} m="auto" mt="25px" pl="50px">
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <HStack mb={'20px'}>
          <Icon as={Icon1} />
          <Text>30 days money back Guarantee</Text>
        </HStack>
        <HStack mb={'20px'}>
          <Icon as={Icon2} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb={'20px'}>
          <Icon as={Icon3} />
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}

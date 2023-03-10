import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  HStack,
  Icon,
} from '@chakra-ui/react';
import checkMarkIcons from './checkMarkIcons';

export default function Pricing() {
  return (
    <Box
      maxW={'950px'}
      mx={{ base: '20px', lg: 'auto' }}
      //   ml={{ base: '10px', lg: 'auto' }}
      //   mr={{ base: '10px', lg: 'auto' }}
      mt="-150px"
      bg="white"
      borderRadius={'16px'}
      overflow="hidden"
      boxShadow={
        '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04) '
      }
    >
      <Flex direction={{ base: 'column', md: 'column', lg: 'row' }}>
        <Box bg="#F0EAFB" p="60px" textAlign={'center'}>
          <Text fontSize={'24px'} fontWeight="bold">
            Premium PRO
          </Text>
          <Heading fontSize={'60px'}>$329</Heading>
          <Text>billed just once</Text>
          <Button mt={'20px'} w={'300px'} color="white" bg={'#805AD5'}>
            Get Started
          </Button>
        </Box>
        <Box pt="50px" pl="25px" pr={'10px'}>
          <Text mb={'10px'}>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb={'5px'}>
            <Icon as={checkMarkIcons} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={'5px'}>
            <Icon as={checkMarkIcons} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={'5px'}>
            <Icon as={checkMarkIcons} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={'5px'}>
            <Icon as={checkMarkIcons} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
        ;
      </Flex>
    </Box>
  );
}

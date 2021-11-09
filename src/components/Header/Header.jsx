import {
  Box,
  Center,
  Text,
  VStack
} from '@chakra-ui/react';
import HeaderImage from '../../images/components/Header/HeaderImage.png';
import React from 'react';
import ModalWindow from '../Modal/Modal';

export function Header() {
  return (
    <Box>
      <Box
        bgImage={HeaderImage}
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Center h="600px">
          <VStack spacing="30px">
            <Text
              fontSize={{base: '28px', md: '38px', xl: '44px'}}
              fontWeight="900"
              textAlign="center"
              textTransform="uppercase"
              color="#fff"
              letterSpacing="0.06rem"
            >
              Lorem ipsum dolor sit <br/> amet consectetur.
            </Text>
            <ModalWindow />
          </VStack>
        </Center>
      </Box>
    </Box>
  );
}

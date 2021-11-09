import React from 'react';
import {
  Box,
  Flex,
  Text
} from '@chakra-ui/react';

const Post = ({ title, imgThumbnail }) => {
  return (
    <Box
      bgImage={imgThumbnail}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Flex h="370px" w="294px" align="flex-end">
        <Flex
          w="100%"
          h="70px"
          align="center"
          justify="center"
          bgColor="rgba(47, 48, 58, 0.8)"
        >
          <Text
            fontFamily="Roboto"
            fontWeight="500"
            fontSize="14px"
            textTransform="uppercase"
            color="#fff"
          >
            {title}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Post;

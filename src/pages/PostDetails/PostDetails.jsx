import React from 'react';
import {
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { usePostsContext } from '../../PostsContext';

const PostDetails = () => {
  const { selectedPost } = usePostsContext();
  return (
    <Center py="40px" bgColor="#fff">
      <Flex
        w="1170px"
      >
        <Flex gridGap="30px">
          <Image
            src={selectedPost.imgThumbnail}
            h="470px"
            w="470px"
          />
          <Flex flexDirection="column" gridGap="15px">
            <Heading
              fontFamily="Roboto"
              fontSize="36px"
              fontWeight="700"
              letterSpacing="0.03rem"
              color="#212121"
            >
              {selectedPost.title}
            </Heading>
            <Text
              fontFamily="Roboto"
              fontSize="18px"
              fontWeight="400"
              letterSpacing="0.02rem"
              color="#757575"
              mb="40px"
            >
              {selectedPost.detailText}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default PostDetails;

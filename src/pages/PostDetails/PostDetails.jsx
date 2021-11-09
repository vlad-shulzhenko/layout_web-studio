import React from 'react';
import {
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import {usePostsContext} from '../../PostsContext';

const PostDetails = () => {
  const { selectedPost } = usePostsContext();
  return (
    <Center my="40px">
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
              fontSize="36px"
              fontWeight="700"
              color="#212121"
            >
              {selectedPost.title}
            </Heading>
            <Text
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

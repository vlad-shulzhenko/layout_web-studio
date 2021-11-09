import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Post from '../../components/Post/Post';
import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { usePostsContext } from '../../PostsContext';

export function HomePage() {
  const [postsQuantity, setPostsQuantity] = useState(3);
  const { posts, setSelectedPost } = usePostsContext();

  return (
    <>
      <Header />
      <Flex
        w="100%"
        direction="column"
        alignItems="center"
        py="80px"
        bgColor="#fff"
      >
        <Heading
          fontFamily="Roboto"
          fontSize="36px"
          letterSpacing="0.03rem"
          fontWeight="700"
          mb="50px"
          color="#212121"
        >
          Title
        </Heading>

        <Flex gridGap="30px" mb="30px" direction="column">
          <Flex gridGap="30px" direction={{base: 'column', xl: 'row'}}>
            {posts.slice(0, 3).map(post => (
              <Link to="/layout_web-studio/post" onClick={() => setSelectedPost(post)}>
                <Box>
                  <Post
                    key={post.id}
                    title={post.title}
                    imgThumbnail={post.imgThumbnail}
                  />
                </Box>
              </Link>
            ))}
          </Flex>
          {postsQuantity > 3 && (
            <Flex gridGap="30px" direction={{base: 'column', xl: 'row'}}>
              {posts.slice(3, 6).map(post => (
                <Link to="/layout_web-studio/post" onClick={() => setSelectedPost(post)}>
                  <Box>
                    <Post
                      key={post.id}
                      title={post.title}
                      imgThumbnail={post.imgThumbnail}
                    />
                  </Box>
                </Link>
              ))}
            </Flex>
          )}
          {postsQuantity > 6 && (
            <Flex gridGap="30px" direction={{base: 'column', xl: 'row'}}>
              {posts.slice(6, 9).map(post => (
                <Link to="/layout_web-studio/post" onClick={() => setSelectedPost(post)}>
                  <Box>
                    <Post
                      key={post.id}
                      title={post.title}
                      imgThumbnail={post.imgThumbnail}
                    />
                  </Box>
                </Link>
              ))}
            </Flex>
          )}
        </Flex>
        {postsQuantity < 7 && (
          <Button
            bgColor="#2196F3"
            h="50px"
            w="200px"
            _hover={{bgColor: '#2015B5'}}
            onClick={() => setPostsQuantity(postsQuantity + 3)}
          >
            <Text color="#fff" letterSpacing="0.06rem">
              Загрузить ещё
            </Text>
          </Button>
        )}
      </Flex>
    </>
  );
}

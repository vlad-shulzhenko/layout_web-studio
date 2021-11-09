import React, {createContext, useContext, useEffect, useState} from 'react';
import {getPosts} from './api';

export const PostsContext = createContext();

const usePostsContext = () => useContext(PostsContext);

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect( () => {
    async function fetchData() {
      const obj = await getPosts();
      setPosts(obj.data.posts);
    }
    fetchData();
  }, []);

  return (
    <PostsContext.Provider value={{
      posts,
      selectedPost,
      setSelectedPost,
    }}>
      {children}
    </PostsContext.Provider>
  );
};

export {PostsContextProvider, usePostsContext};

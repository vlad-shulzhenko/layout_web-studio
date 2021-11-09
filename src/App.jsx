import React from 'react';
import {
  Box,
  ChakraProvider,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router, Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import PostDetails from './pages/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import { PostsContextProvider } from './PostsContext';

function App() {
  return (
    <PostsContextProvider>
      <ChakraProvider>
        <Router>
          <Box minH="100%">
            <Navbar />
            <Switch>
              <Route exact={true} path="/layout_web-studio/">
                <HomePage />
              </Route>
              <Route path="/layout_web-studio/post">
                <PostDetails />
              </Route>
              <Redirect to="/layout_web-studio/"/>
            </Switch>
            <Footer />
          </Box>
        </Router>
      </ChakraProvider>
    </PostsContextProvider>
  );
}

export default App;

import React from 'react';
import {
  ChakraProvider,
  ColorModeScript,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
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
          <Navbar />
          <Switch>
            <Route exact={true} path="/layout_web-studio/">
              <HomePage />
            </Route>
            <Route path="/layout_web-studio/post">
              <PostDetails />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ChakraProvider>
    </PostsContextProvider>
  );
}

export default App;

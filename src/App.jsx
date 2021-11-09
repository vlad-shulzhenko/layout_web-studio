import React from 'react';
import {
  Box,
  ChakraProvider,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Route,
  Routes, Switch,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import theme from './theme';
import {HomePage} from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import PostDetails from './pages/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import {PostsContextProvider} from './PostsContext';

function App() {
  return (
    <PostsContextProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact={true} path="/">
              <HomePage />
            </Route>
            <Route path="/post">
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

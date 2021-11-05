import React from 'react';
import {
  Box,
  Container,
  Center,
} from '@chakra-ui/react';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <Box w="100%">
      <Center>
        <Container maxW="1170px">
          <HomePage />
        </Container>
      </Center>
    </Box>
  );
}

export default App;

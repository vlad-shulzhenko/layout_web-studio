import global from './global';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global,
  }
})

export default theme;

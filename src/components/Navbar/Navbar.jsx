import React from 'react';
import {
  Flex,
  HStack,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import WebStudio from '../../images/components/Header/WebStudio.png';
import { navLinks } from '../../constants';
import HeaderLink from '../Header/HeaderLink';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
import { DrawerExample } from '../Drawer/Drawer';

const Navbar = () => {
  let location = useLocation();

  return (
    <Flex
      w="100%"
      justify="center"
      py="25px"
    >
      <Flex
        w={{base: '300px', md: '650px', lg: '750px', xl: '1170px'}}
        align="center"
        justify="space-between"
      >
        <Flex gridGap={{base: '50px', xl: '90px'}}>
          <Link href="/">
            <Image src={WebStudio} />
          </Link>
          <HStack spacing="50px" display={{ base: 'none', xl: 'block'}}>
            {navLinks.map(navLink => (
              <HeaderLink
                key={navLink.name}
                name={navLink.name}
                to={navLink.to}
                isActive={navLink.to === location.pathname}
              />
            ))}
          </HStack>
        </Flex>

        <Flex
          gridGap="30px"
          justify="flex-end"
          align="center"
          display={{base: 'none', xl: 'flex'}}
        >
          <Link
            href="mailto:info@devstudio.com"
            color="#757575"
            _hover={{color:'#2196F3'}}
          >
            <HStack spacing="10px">
              <EmailIcon h="12px" w="16px" />
              <Text fontWeight="500">
                info@devstudio.com
              </Text>
            </HStack>
          </Link>
          <Link
            href="tel:+380961111111"
            color="#757575"
            _hover={{color:'#2196F3'}}
          >
            <HStack spacing="10px">
              <PhoneIcon h="12px" w="16px"/>
              <Text fontWeight="500">
                +38 096 111 11 11
              </Text>
            </HStack>
          </Link>
        </Flex>
        <DrawerExample />
      </Flex>
    </Flex>
  );
};

export default Navbar;

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";
import burger from '../../images/burger.svg';
import React from 'react';

export function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link display={{base: 'block', xl: 'none'}} onClick={onOpen}>
        <Image src={burger} />
      </Link>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex
              py="40px"
              px="30px"
              direction="column"
              gridGap="30px"
              justify="center"
              textAlign="center"
            >
              <Link
                href="/"
                fontSize="28px"
                fontWeight="500"
                color="#2196F3"
              >
                Студия
              </Link>
              <Link
                href="#"
                fontWeight="500"
                fontSize="28px"
              >
                Портфолио
              </Link>
              <Link
                href="#"
                fontWeight="500"
                fontSize="28px"
              >
                Контакты
              </Link>
              <Link
                href="mailto:info@devstudio.com"
                color="#757575"
                _hover={{color:'#2196F3'}}
                fontSize="28px"
              >
                <Text fontWeight="500">
                  Написать нам
                </Text>
              </Link>
              <Link
                href="tel:+380961111111"
                color="#757575"
                _hover={{color:'#2196F3'}}
                fontSize="28px"
              >
                <Text fontWeight="500">
                  Позвонить нам
                </Text>
              </Link>
            </Flex>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

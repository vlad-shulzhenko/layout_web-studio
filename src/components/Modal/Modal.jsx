import React from 'react';
import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';

const ModalWindow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bgColor="#2196F3"
        w="200px"
        h="50px"
        borderRadius="4px"
        _hover={{bgColor: '#2015B5'}}
        onClick={onOpen}
      >
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="700"
          color="#fff"
          letterSpacing="0.06rem"
        >
          связаться
        </Text>
      </Button>
      <Modal
        size="lg"
        isOpen={isOpen}
        onClose={onClose}
        bgColor="#fff"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={{base: '16px', xl: '20px'}}
            fontFamily="Roboto"
            fontWeight="700"
            textAlign="center"
          >
            Оставьте свои данные, мы вам перезвоним
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action="#" method="GET">
              <FormLabel
                fontFamily="Roboto"
                fontSize="12px"
                fontWeight="400"
                color="#757575"
                mb="4px"
                htmlFor="name"
              >
                Имя
              </FormLabel>
              <FormControl isRequired>
                <InputGroup mb="10px">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUserAlt />}
                  />
                  <Input
                    id="name"
                    name="name"
                    h="40px"
                    w="450px"
                    type="text"
                  />
                </InputGroup>
              </FormControl>

              <FormLabel
                htmlFor="tel"
                fontFamily="Roboto"
                fontSize="12px"
                fontWeight="400"
                color="#757575"
                mb="4px"
              >
                Телефон
              </FormLabel>
              <FormControl isRequired>
                <InputGroup mb="10px">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaPhoneAlt />}
                  />
                  <Input
                    id="tel"
                    name="tel"
                    h="40px"
                    w="450px"
                    type="number"
                  />
                </InputGroup>
              </FormControl>

              <FormLabel
                htmlFor="email"
                fontFamily="Roboto"
                fontSize="12px"
                fontWeight="400"
                color="#757575"
                mb="4px"
              >
                Почта
              </FormLabel>
              <FormControl isRequired>
                <InputGroup mb="10px">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon />}
                  />
                  <Input
                    id="email"
                    name="email"
                    h="40px"
                    w="450px"
                    type="email"
                  />
                </InputGroup>
              </FormControl>

              <FormLabel
                htmlFor="textarea"
                fontFamily="Roboto"
                fontSize="12px"
                fontWeight="400"
                color="#757575"
                mb="4px"
              >
                Комментарий
              </FormLabel>
              <Textarea
                id="textarea"
                name="textarea"
                w="450px"
                h="120px"
                resize="none"
                mb="20px"
                placeholder="Введите текст"
              />
              <Checkbox mb="30px" isRequired>
                <Text
                  fontFamily="Roboto"
                  fontSize="14px"
                  fontWeight="400"
                  letterSpacing="0.03rem"
                >
                  Соглашаюсь с рассылкой и принимаю
                  &nbsp;
                  <Link
                    color="#2196F3"
                    textDecoration="underline"
                    href="https://www.upcounsel.com/business-contracts"
                  >
                    Условия договора
                  </Link>
                </Text>
              </Checkbox>
              <Center>
                <Button
                  w="200px"
                  h="50px"
                  type="submit"
                  bgColor="#188CE8"
                  mb="40px"
                  _hover={{bgColor: '#2015B5'}}
                >
                  <Text
                    fontSize="16px"
                    fontWeight="700"
                    letterSpacing="0.06rem"
                    color="#fff"
                  >
                    Отправить
                  </Text>
                </Button>
              </Center>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
};

export default ModalWindow;

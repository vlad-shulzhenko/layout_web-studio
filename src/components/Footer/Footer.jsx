import React from 'react';
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react';
import FooterWebStudio from '../../images/components/Footer/FooterWebStudio.png';
import instagram from '../../images/socials/instagram.svg';
import twitter from '../../images/socials/twitter.svg';
import facebook from '../../images/socials/facebook.svg';
import linkedin from '../../images/socials/linkedin.svg';
import subscribe from '../../images/subscribe.svg';

const Footer = () => {

  return (
    <Box
      w="100%"
      bgColor="#2F303A"
      py="60px"
    >
      <Center>
        <Flex
          w={{base: '240px', md: '560px', lg: '750px', xl: '1170px'}}
          direction={{base: 'column', md: 'row'}}
          gridGap={{base: '25px', xl: 'none'}}
          justify={{base: 'center', lg: 'space-between'}}
        >
          <Flex
            gridGap="20px"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Link href="/layout_web-studio/">
              <Image src={FooterWebStudio} />
            </Link>

            <VStack alignItems="flex-start" spacing="9px">
                <Link
                  href="https://www.google.com/maps/place/%D0%B1%D1%83%D0%BB.+%D0%9B%D0%B5%D1%81%D0%B8+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%BA%D0%B8,+26,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/data=!4m2!3m1!1s0x40d4cf0e033ecbe9:0x57a4dffefec77da0?sa=X&ved=2ahUKEwjDsZXavYb0AhUEgf0HHaWlACwQ8gF6BAgFEAE"
                  target="_blank"
                  fontFamily="Roboto"
                  fontSize="14px"
                  fontWeight="400"
                  color="#fff"
                >
                  г. Киев, пр-т Леси Украинки, 26
                </Link>
                <Link
                  href="mailto:info@example.com"
                  color="rgba(255, 255, 255, 0.6)"
                  fontFamily="Roboto"
                  fontWeight="500"
                  fontSize="14px"
                  letterSpacing="0.03rem"
                >
                  info@example.com
                </Link>
                <Link
                  href="tel:+380991111111"
                  color="rgba(255, 255, 255, 0.6)"
                  fontFamily="Roboto"
                  fontWeight="500"
                  fontSize="14px"
                  letterSpacing="0.03rem"
                >
                  +38 099 111 11 11
                </Link>
              </VStack>
          </Flex>
          <Flex flexDirection="column" gridGap="20px">
            <Text
              fontFamily="Roboto"
              fontWeight="700"
              fontSize="14px"
              letterSpacing="0.03rem"
              textTransform="uppercase"
              color="#fff"
            >
              присоединяйтесь
            </Text>
            <HStack spacing="10px">
              <Link href="https://www.instagram.com/" target="_blank">
                <Circle size="44px" bg="rgba(255, 255, 255, 0.1)" _hover={{bgColor: '#DD2A7B'}}>
                  <Image src={instagram}/>
                </Circle>
              </Link>
              <Link href="https://www.twitter.com/" target="_blank">
                <Circle size="44px" bg="rgba(255, 255, 255, 0.1)" _hover={{bgColor: '#2196F3'}}>
                  <Image src={twitter}/>
                </Circle>
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <Circle size="44px" bg="rgba(255, 255, 255, 0.1)" _hover={{bgColor: '#3B5998'}}>
                  <Image src={facebook}/>
                </Circle>
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <Circle size="44px" bg="rgba(255, 255, 255, 0.1)" _hover={{bgColor: '#0E76A8'}}>
                  <Image src={linkedin}/>
                </Circle>
              </Link>
            </HStack>
          </Flex>
          <Flex flexDirection="column" gridGap="20px">
            <Text
              fontWeight="700"
              color="#fff"
              fontFamily="Roboto"
              fontSize="14px"
              letterSpacing="0.03rem"
              textTransform="uppercase"
            >
              Подпишитесь на рассылку
            </Text>
            <form onSubmit={(event) => {
              event.preventDefault()
            }}>
              <Flex gridGap="12px" direction={{base: 'column', xl: 'row'}}>
                <Input
                  height="50px"
                  width={{base: '200px', xl: '350px'}}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  p="15px"
                  color="rgba(255, 255, 255, 0.6)"
                  bgColor="#2F303A"
                  borderColor="rgba(0, 0, 0, 0.3)"
                  required
                />
                <Button
                  type="submit"
                  h="50px"
                  w="200px"
                  fontFamily="Roboto"
                  fontWeight="700"
                  fontSize="16px"
                  letterSpacing="0.06rem"
                  bgColor="#2196F3"
                  _hover={{bgColor: '#2015B5'}}
                >
                  <Flex gridGap="10px" align="center">
                    <Text
                      fontSize="16px"
                      fontWeight="700"
                      color="#fff"
                      leterSpacing="0.06rem"
                    >
                      Подписаться
                    </Text>
                    <Image
                      src={subscribe}
                      h="24px"
                      w="24px"
                      display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}
                    />
                  </Flex>
                </Button>
              </Flex>
            </form>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default Footer;

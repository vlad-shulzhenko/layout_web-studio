import React from 'react';
import { Link } from '@chakra-ui/react';

const HeaderLink = ({ name, isActive, to }) => {
  const color = isActive ? '#2196F3' : '#212121';
  if (isActive) {
    return (
      <Link
        to={to}
        color={color}
        fontFamily="Roboto"
        fontWeight="500"
        fontSize="14px"
        letterSpacing="0.02rem"
        borderBottom="3px solid #2196F3"
        pb="24px"
        _hover={{color:'#2196F3'}}
      >
        {name}
      </Link>
    )
  } else {
    return (
      <Link
        to={to}
        color={color}
        fontFamily="Roboto"
        fontWeight="500"
        fontSize="14px"
        letterSpacing="0.02rem"
        _hover={{color:'#2196F3'}}
      >
        {name}
      </Link>
    );
  }
};

export default HeaderLink;

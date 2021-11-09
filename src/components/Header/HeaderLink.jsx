import React from 'react';
import { Link } from '@chakra-ui/react';

const HeaderLink = ({ name, isActive, to }) => {
  const color = isActive ? '#2196F3' : '#000';
  if (isActive) {
    return (
      <Link
        to={to}
        color={color}
        fontWeight="500"
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
        fontWeight="500"
        _hover={{color:'#2196F3'}}
      >
        {name}
      </Link>
    );
  }
};

export default HeaderLink;

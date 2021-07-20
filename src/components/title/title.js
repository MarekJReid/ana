import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size, isVisible, marginBottom }) => {
  return (
    <Text as={as} size={size} marginBottom={marginBottom}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
  marginBottom: PropTypes.oneOf(['large']),
};

export default Title;

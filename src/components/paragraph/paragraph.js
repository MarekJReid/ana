import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './paragraph.css';

const Paragraph = ({ children, as = 'span', size, marginBottom, isVisible }) => {
  return (
    <Text as={as} size={size} marginBottom={marginBottom} isVisible={isVisible}>
      {children}
    </Text>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
  marginBottom: PropTypes.oneOf(['normal']),
};

export default Paragraph;

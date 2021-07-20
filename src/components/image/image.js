import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy, ImageContainer, ImageDisp } from './image.css';

const Image = ({ title, copy, image }) => (
  <ImageContainer>
    <ImageDisp fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
  </ImageContainer>
);

Image.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Image;

import React from 'react';
import IO from '../../../../components/io';
import Gallery from '../../../../components/Gallery';
import Paragraph from '../../../../components/paragraph';
import Image from '../../../../components/image';
import { useStaticQuery, graphql } from "gatsby"
import { Container, LeftContainer, RightContainer } from './services.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const Intro = () => {
//   const data = useStaticQuery(graphql`
  
// `)
  // console.log(data)
  return (
<IO rootMargin="-50px">
  {({ isVisible }) => (
    <Container isVisible={isVisible}>
        {/* <Gallery items={data.gallery} /> */}
      
    </Container>
  )}
</IO>
)};

export default Intro;



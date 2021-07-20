import React from 'react';
import IO from '../../../components/io';
import Title from '../../../components/title';
import Paragraph from '../../../components/paragraph';
import Image from '../../../components/image';
import { graphql } from 'gatsby';
import { Container, LeftContainer, RightContainer } from './intro.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const Intro = ({galleryItems}) => {
  console.log(galleryItems[0].image)
  return (
<IO rootMargin="-50px">
  {({ isVisible }) => (
    <Container isVisible={isVisible}>
    <LeftContainer isVisible={isVisible}>
      <Title tag="span" size="large" marginBottom="normal">Hi, I am Anna Lea</Title>
      <Paragraph marginBottom="normal" isVisible={isVisible}>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </Paragraph>
      <Paragraph marginBottom="normal" isVisible={isVisible}>
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
      </Paragraph>
      <Paragraph marginBottom="normal" >
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
      </Paragraph>
      </LeftContainer>
      <RightContainer>
     <Image image={galleryItems[0].image} />
      </RightContainer>
      
    </Container>
  )}
</IO>
)};

export default Intro;



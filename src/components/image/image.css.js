import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import Img from 'gatsby-image';

export const ImageContainer = styled.div`
width: 100%;
`

export const ImageDisp = styled(Img)`
min-width: 100%;
min-height: 100%;
`

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

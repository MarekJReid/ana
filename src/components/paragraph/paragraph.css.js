import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
   transition: opacity 0.3s ease;
text-align: left;
  opacity: ${({ isVisible }) => (isVisible ? '1' : ' 0')};
   margin-bottom: ${({ marginBottom }) => () => {
    switch (marginBottom) {
      case 'normal':
        return '2.25rem';
        case 'large':
        return '3.25rem';
      default:
        return '2.25rem';
    }
  }};

  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '200';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '1rem';
      }
    }};
  `};
`;

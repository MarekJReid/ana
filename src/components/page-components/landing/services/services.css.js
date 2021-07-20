import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Container = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
  padding: 4rem;
  margin: 0 14rem;
  height: 100vh;
  position: relative;
  text-align: center;
  color: grey;
  transition: opacity 0.3s ease;

  opacity: ${({ isVisible }) => (isVisible ? '1' : ' 0')};
`;

export const LeftContainer = styled.div`
  width: 60%;
  height: 50vh;
  position: relative;
  text-align: center;
  color: grey;
  transition: opacity 0.3s ease;

  opacity: ${({ isVisible }) => (isVisible ? '1' : ' 0')};
`;


export const RightContainer = styled.div`
  width: 35%;
  height: 50vh;
  position: relative;
  text-align: center;
  background: grey;
 display:flex;
 align-items: center;
 justify-content: center;
`;

import styled from 'styled-components';

export const Container = styled.div`
 background: url('${props => props.image}') center;
    background-size: cover;
    background-attachment: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
 height: 100vh;
 width: 99vw;
 overflow-x: hidden;


  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

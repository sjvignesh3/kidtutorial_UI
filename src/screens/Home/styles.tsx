import { Container, Row } from "react-bootstrap"
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LGContainer = styled(Row)`
    display : flex;
    background : #695bf6;
    justify-content: center;
    @media screen and (max-width: 800px){
        justify-content: flex-start;
        width: 50rem;
    }
    animation: ${fadeInAnimation} ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: left ;
`
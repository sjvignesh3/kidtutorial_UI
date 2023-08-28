import { Col, Row } from 'react-bootstrap';
import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
    display : flex;
    flex-direction : column;
    margin-bottom : 2.5rem;
`

export const DivRight = styled.div`
    display : flex;
    text-align : center;
    justify-content : flex-end;
    margin-bottom : 1rem;
` 

export const DivLeft = styled.div`
    display : flex;
    text-align : center;
    justify-content : flex-start;
` 

export const SText = styled.div`
    font-weight : 600;
    font-style: bold;
    padding-right : 1rem;
`

export const LText = styled.div`
    font-weight : 700;
    font-size : 44px;
    padding-right : 1rem;
`
import { Col, Container, Row } from "react-bootstrap"
import { styled } from "styled-components"

export const SContainer = styled(Col)`
    display : flex;
    height : 100vh;
    width : 20%;
    background : #695bf6;
    color: #fefefe;
    justify-content : center;
    @media screen and (max-width: 1024px) { 
        display:none;
    }
`
export const Bbutton = styled.div`
    border : none;
    color : #fefefe;
    
`
export const Containersm = styled.div`
      display : none;
      position : initial;
      @media screen and (max-width: 1024px) {
        display:block;
    }
`
import { Col, Container, Offcanvas, Row, Image } from "react-bootstrap"
import { styled } from "styled-components"

export const SContainer = styled(Col)`
    display : flex;
    flex-direction : column;
    height : 100vh;
    width : 20%;
    background : #695bf6;
    color: #fefefe;
    justify-content : center;
    @media screen and (max-width: 1200px) { 
        width : 7%;
    }
`

export const SText = styled.div`
    font-weight : 500;
    padding-right : 1rem;
`
export const LText = styled.div`
    font-weight : 700;
    font-size : 26px;
    padding-right : 1rem;
    text-align : center;
    @media screen and (max-width: 1200px) { 
        display: none;
    }
`

export const BrandContainer = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : 2rem;
    @media screen and (max-width: 1200px) { 
        margin: 2rem 0 0 0  ;
    }
`

export const IImage = styled(Image)`
    object-fit: cover;
    background-color : white;
    margin-bottom : 20%;
    @media screen and (max-width: 1200px) { 
        width: 30px;
        height : 30px;
    }
`

export const PagesContainer = styled.div`
    width : 100%;
    height : 100vh;
    background-color : #695bf6;
    display : block;
`

export const CCol = styled.div`
    text-align : start;
    color : white;
    
`

export const PageSectionContainer = styled.div`
    margin: 2rem 4rem 2rem 1rem;
    text-align: center;
    display : flex;
    justify-content: center;
    @media screen and (max-width: 1200px) { 
        margin : 4rem 0rem 4rem 0rem;
    }
`
export const Icon = styled.div`
    height : 50px;
    width : 50px;
    @media screen and (max-width: 1200px) { 
        height : 30px;
        width : 30px;
    }
`

export const Text =styled.div`
    font-weight : 700;
    font-size: 26px;
    @media screen and (max-width: 1200px) { 
        display: none;
    }
`
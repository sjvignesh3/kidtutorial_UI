import { Col, Container, Offcanvas, Row, Image, Card } from "react-bootstrap"
import { styled } from "styled-components"

interface activePageProp{
    activepg: boolean
}

export const SContainer = styled(Col)`
    display : flex;
    flex-direction : column;
    
    width : 20%;
    background : #695bf6;
    color: #fefefe;
    justify-content : flex-start;
    @media screen and (max-width: 1200px) { 
        width : 7%;
    }
`

export const SText = styled.div`
    font-weight : 500;
    font-size : 14px;
    padding-right : 1rem;
`
export const LText = styled.div`
    font-weight : 700;
    font-size : 26px;
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
    margin-bottom: 1.5rem;
    align-self: center;
    @media screen and (max-width: 1200px) { 
        width: 30px;
        height : 30px;
    }
`

export const PagesContainer = styled.div`
    width : 100%;
    background-color : #695bf6;
    display : block;
    margin-bottom: 3rem;
`

export const CCol = styled.div`
    text-align : start;
    color : white;
    
`

export const PageSectionContainer = styled.div<activePageProp>`
    margin: 2rem 4rem 2rem 0rem;
    justify-content: center;
    text-align: center;
    display : flex;
    align-items: center;
    height: 70px;
    border-radius: 0rem 4rem 4rem 0rem;
    background: ${props=> props.activepg ? "green": "#695bf6"};
    @media screen and (max-width: 1200px) { 
        margin : 4rem 0rem 4rem 0rem;
    }
    
`   
export const Icon = styled.div`
    height : 50px;
    width : 50px;
    @media screen and (max-width: 1200px) { 
        height : 35px;
        width : 35px;
    }
`

export const Text =styled.div<activePageProp>`
    font-weight : 700;
    font-size: ${props => props.activepg ? "24px": "20px"};
    margin-left: 1rem;
    @media screen and (max-width: 1200px) { 
        display: none;
    }
`

export const ProgressCard = styled(Card)`
    display: block;
    background: #fefefe;
    border-radius: 1rem;
    color: black;
    margin: 0% 20% 20% 20%;
    padding: 2rem;

    @media screen and (max-width: 1200px){
        display: none;
    }
`

export const CardHeader= styled.h1`
    font-style: bold;
    font-size: 1.5rem;
    text-align: center;
`

export const ProgressBar= styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

export const ProgressFooter= styled.div`
    text-align: center;
`

export const RewardDiv= styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
`
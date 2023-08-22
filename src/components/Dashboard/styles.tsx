import { Container } from "react-bootstrap"
import { styled } from "styled-components"

export const DashboardContainer = styled.div`
    flex: 1;
    color: black;
    background: white;
    display: block;
    justify-content : center;
    border-radius : 4rem 4rem 4rem 0rem;
    margin : 1rem;
    padding : 3rem;

    @media screen and (max-width: 1024px){
        border-radius : 0.3rem;
        margin : 0.3rem;
    }
`

export const HomeLayout = styled.div`
    display : flex;
    justify-content: space-between;
    align-content: baseline;
    flex-direction : row;
    flex-wrap : wrap;
    width : 100%;
    height: 100vh;
    @media screen and (max-width: 1024px){
        width: 90%;
        display: block;
        height: auto;
    }
`

export const FlexColumn = styled.div`
    width: 50%;
    @media screen and (max-width: 1024px){
        width: 100%;
        margin: auto;
    }
` 
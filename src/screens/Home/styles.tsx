import { Container, Row } from "react-bootstrap"
import { styled } from "styled-components"

export const LGContainer = styled(Row)`
    display : flex;
    background : #695bf6;
    justify-content: center;
    @media screen and (max-width: 800px){
        justify-content: flex-start;
        width: 50rem;
    }
`
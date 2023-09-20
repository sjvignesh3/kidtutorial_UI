import {styled} from 'styled-components'

interface CardColor{
    bgColor : string
}

export const Card = styled.div<CardColor>`
    display : flex;
    justify-content : space-between;
    padding : 2rem;
    border-radius : 1.25rem;
    background : ${props => props.bgColor ? props.bgColor: props.bgColor};
    color: #fefefe;
    margin: 1rem 0rem 1rem 0rem;
`

export const CardHeader = styled.div`
    font-weight : 700;
    margin-bottom : 1rem;
`

export const CardBody = styled.div`
    font-weight : 600;
    margin-bottom : 1rem;
`

export const Button = styled.button`
    border: none;
    width: 100px;
    height: 30px;
    border-radius : 1rem;
    background : #fefefe;
    color : #1d1d1d;
    font-weight : 700;
    
`
export const Image = styled.img`
   
`
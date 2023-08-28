import { Image } from 'react-bootstrap'
import {styled} from 'styled-components'

export const SectionContainer = styled.div`
    width : 100%;
    margin-bottom : 1rem;
    @media screen and (max-width: 1200px){
        width: 100%;
    }
`
export const SectionHeader = styled.div`
    display: flex;
    justify-content : space-between;
    padding-bottom : 1rem;
`

export const H3 = styled.h3`

`
export const FullWidth = styled.div`
    grid-column: 1/span 2 ;
`

export const SectionContent = styled.div`
    width: 100%;
    height: 100%;
    display : grid;
    column-gap : 1.5rem;
    grid-template-columns : 1fr 1fr;
    @media screen and (max-width: 1200px){
        display: block;
    }
`

export const ProgressContent = styled.div`
    display : flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`

export const ImageDiv = styled.div`
    width: 40%;
    height: 40%;
    display: flex; 
    justify-content: center;
    align-items: center;
`
export const ImageContent = styled(Image)`
    height: 100px;
    weight: 100px;
    padding: 1rem;
`
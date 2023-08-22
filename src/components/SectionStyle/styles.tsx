import {styled} from 'styled-components'

export const SectionContainer = styled.div`
    width : 90%;
    margin-bottom : 1rem;
    @media screen and (max-width: 1024px){
        width: 90%;
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
    display : grid;
    column-gap : 1.5rem;
    grid-template-columns : 1fr 1fr;
    @media screen and (max-width: 1024px){
        display: block;
    }
`
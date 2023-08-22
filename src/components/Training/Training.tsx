import React from 'react'
import * as S from '../SectionStyle/styles'
import Card from '../Card/Card'

const Training = () => {
  return (
    <>
        <S.SectionContainer>
            <S.SectionHeader>
                <S.H3>Training</S.H3>
                <S.H3>{"-->"}</S.H3>
            </S.SectionHeader>

            <S.SectionContent>
                <S.FullWidth>
                    <Card/>
                </S.FullWidth>  
            </S.SectionContent>      
        </S.SectionContainer>
    </>
  )
}

export default Training
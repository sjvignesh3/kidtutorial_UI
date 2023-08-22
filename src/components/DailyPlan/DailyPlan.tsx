import React from 'react'
import * as S from '../SectionStyle/styles'
import Card from '../Card/Card'

const DailyPlan = () => {
  return (
    <>  
      <S.SectionContainer>
        <S.SectionHeader>
            <S.H3>Your todays's plan</S.H3>
            <S.H3>{"-->"}</S.H3>
        </S.SectionHeader>
        <S.SectionContent>
          <S.FullWidth>
            <Card/>
          </S.FullWidth>
            <Card/>
            <Card/>
        </S.SectionContent>
      </S.SectionContainer>  
    </>
  )
}

export default DailyPlan
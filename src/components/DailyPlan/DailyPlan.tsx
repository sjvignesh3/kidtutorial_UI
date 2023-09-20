import React from 'react'
import * as S from '../SectionStyle/styles'
import Card from '../Card/Card'
import { TodayPlan } from '../../screens/AppData'

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
            <Card Content= {TodayPlan[0]}/>
          </S.FullWidth>
            <Card Content= {TodayPlan[1]}/>
            <Card Content= {TodayPlan[2]}/>
        </S.SectionContent>
      </S.SectionContainer>  
    </>
  )
}

export default DailyPlan
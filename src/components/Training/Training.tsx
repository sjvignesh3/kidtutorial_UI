import React from 'react'
import * as S from '../SectionStyle/styles'
import Card from '../Card/Card'
import { TodayPlan } from '../../screens/AppData'

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
                    <Card Content= {TodayPlan[0]}/>
                </S.FullWidth>  
            </S.SectionContent>      
        </S.SectionContainer>
    </>
  )
}

export default Training
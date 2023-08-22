import React from 'react'
import * as S from './styles'
import Header from '../Header/Header'
import DailyPlan from '../DailyPlan/DailyPlan'
import Progress from '../Progress/Progress'
import Training from '../Training/Training'
import Statistics from '../Statistics/Statistics'

const Dashboard = () => {
  return (
    <S.DashboardContainer>
      <Header/>
      <S.HomeLayout>
        <S.FlexColumn>
          <DailyPlan/>
          <Training/>
          
        </S.FlexColumn>
        <S.FlexColumn>
          <Progress/>
          <Statistics/>
        </S.FlexColumn>
      </S.HomeLayout>
    </S.DashboardContainer>
  )
}

export default Dashboard
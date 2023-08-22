import React from 'react'
import * as S from './styles'

const Header = () => {
  return (
    <>
        <S.HeaderContainer>
            <S.DivRight>
                <S.SText>80</S.SText>
                <S.SText>100</S.SText>
                <S.SText>820</S.SText>
            </S.DivRight>
            <S.DivLeft>
                <S.LText>Hi, Vigneshwaran J!</S.LText>
            </S.DivLeft>
        </S.HeaderContainer>
    </>
  )
}

export default Header
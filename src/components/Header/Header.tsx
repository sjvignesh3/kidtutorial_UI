import React from 'react'
import * as S from './styles'

const Header = () => {
  return (
    <>
        <S.HeaderContainer>
            <S.DivRight>
                <S.SText>5</S.SText>
                <S.SText>90</S.SText>
                <S.SText>Vigneshwaran J</S.SText>
            </S.DivRight>
            <S.DivLeft>
                <S.LText>Hi, Vigneshwaran J!</S.LText>
            </S.DivLeft>
        </S.HeaderContainer>
    </>
  )
}

export default Header
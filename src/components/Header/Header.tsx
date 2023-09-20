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
                <S.Image src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?w=740"/>
                <S.LText>Hi, Vigneshwaran J!</S.LText>
            </S.DivLeft>
        </S.HeaderContainer>
    </>
  )
}

export default Header
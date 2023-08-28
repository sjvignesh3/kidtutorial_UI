import React from 'react'
import * as S from '../SectionStyle/styles'
import Card from '../Card/Card'
import svg from '../../assets/award (1).png'

const Progress = () => {
  return (
    <>
        <S.SectionContainer>
            <S.SectionHeader>
                <S.H3>Progress</S.H3>
                <S.H3>{"-->"}</S.H3>
            </S.SectionHeader>
            <S.ProgressContent>
                <S.ImageDiv>
                    <S.ImageContent src={svg}/>
                </S.ImageDiv>
                <S.ImageDiv>
                    <S.ImageContent src={svg}/>
                </S.ImageDiv>
                <S.ImageDiv>
                    <S.ImageContent src={svg}/>
                </S.ImageDiv>
                <S.ImageDiv>
                    <S.ImageContent src={svg}/>
                </S.ImageDiv>
                <S.ImageDiv>
                    <S.ImageContent src={svg}/>
                </S.ImageDiv>
                <S.ImageDiv>
                    <S.ImageContent src={svg}/>
                </S.ImageDiv>
                
            </S.ProgressContent> 
        </S.SectionContainer>
    </>
  )
}

export default Progress
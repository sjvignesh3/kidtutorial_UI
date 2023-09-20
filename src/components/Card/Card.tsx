import React from 'react'
import * as S from './styles'
import { Col } from 'react-bootstrap';

interface ContentInterface {
  planTitle : string,
  planSubTitle : string,
  image : string,
  bgColor : string,
  imageHeight : string,
  imageWidth : string
}

interface ContentProps{
  Content : ContentInterface
}

const Card = ({Content} : ContentProps) => {
  return (
    <>
        <S.Card bgColor={Content.bgColor}>
            <Col>
                <S.CardHeader>{Content.planTitle}</S.CardHeader>
                <S.CardBody>{"700 words"}</S.CardBody>
                <S.Button>Start</S.Button>
            </Col>
            <Col>
              <S.Image src={Content.image} height={Content.imageHeight} width={Content.imageWidth}>
      
              </S.Image>
            </Col>
        </S.Card>
    </>
  )
}

export default Card;
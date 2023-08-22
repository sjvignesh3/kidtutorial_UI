import React from 'react'
import * as S from './styles'
import { Col } from 'react-bootstrap';

const Card = () => {
  return (
    <>
        <S.Card>
            <Col>
                <S.CardHeader>{"Listening"}</S.CardHeader>
                <S.CardBody>{"700 words"}</S.CardBody>
                <S.Button>Start</S.Button>
            </Col>
        </S.Card>
    </>
  )
}

export default Card;
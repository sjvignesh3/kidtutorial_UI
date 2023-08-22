import React from 'react'
import * as S from './styles'
import { Bars3Icon } from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <>
      <S.Containersm>
        <S.Bbutton>
          <Bars3Icon width={30} height={30}>
            
          </Bars3Icon>
        </S.Bbutton>
      </S.Containersm>
      <S.SContainer>
          NavBar
      </S.SContainer>
    </>
  )
}

export default NavBar
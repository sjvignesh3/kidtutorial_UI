import {useState} from 'react'
import * as S from './styles'
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Button, Offcanvas } from 'react-bootstrap';
import {
  ChartPieIcon,
  UserGroupIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LogoutIcon from "@mui/icons-material/Logout";


export const Brand = ({
  AppBrand
}: any) => {
  return (
    <>
      <S.IImage
          src={AppBrand.img}
          width={AppBrand.width}
          height={AppBrand.height}
      />
      
      <S.LText>{AppBrand.brand}</S.LText> 
    </>
  )

} 


const NavBar = ({
  NavPages, 
  NavProgress,
  AppBrand
}:any) => {

  const __pageSection = (name: string) => {
    return (
      <>
        <S.PageSectionContainer>
          
          <div className="me-2">
            <S.Icon>
              {name === "Home" ? <ChartPieIcon /> : <></>}
              {name === "Products" ? <Inventory2OutlinedIcon /> : <></>}
              {name === "Customers" ? <UserGroupIcon /> : <></>}
              {name === "Reviews" ? <ReviewsOutlinedIcon /> : <></>}
              {name === "Settings" ? <Cog8ToothIcon /> : <></>}
              {name === "Logout" ? <LogoutIcon /> : <></>}
            </S.Icon>
          </div>
          <S.Text>{name}</S.Text>
        
        </S.PageSectionContainer>
      </>
    )
  }

  const __pages = ({NavPages} : any) => {
    return (
      <>

        <S.CCol className="mt-5">{__pageSection("Home")}</S.CCol>
        <S.CCol className="mt-5">{__pageSection("Home")}</S.CCol>
        <S.CCol className="mt-5">{__pageSection("Home")}</S.CCol>
        <S.CCol className="mt-5">{__pageSection("Home")}</S.CCol>
        <S.CCol className="mt-5">{__pageSection("Home")}</S.CCol>
        <S.CCol className="mt-5">{__pageSection("Home")}</S.CCol>
      </>
    );
  }

  return (
    <>
      <S.SContainer>
        <S.BrandContainer>
          <Brand AppBrand={AppBrand}/>
        </S.BrandContainer>
        <S.PagesContainer>
          {__pages(NavPages)}
        </S.PagesContainer>  
      </S.SContainer>
    </>
  )
}

export default NavBar
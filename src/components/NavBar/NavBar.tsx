import {useState, useEffect} from 'react'
import * as S from './styles'
import {
  ChartPieIcon,
  UserGroupIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LogoutIcon from "@mui/icons-material/Logout";



interface NavProps{
  NavPages: NavPagesProps[], 
  NavProgress: NavProgressProps,
  AppBrand: AppBrandProps, 
}

interface NavPagesProps{
  id: number,
  name: string
}

interface NavProgressProps{
  todayProgress : number,
  todayReward : number
}

interface AppBrandProps{
  img : string,
  height: number,
  width: number,
  brand : string
}

interface AppBrandPropProps{
  AppBrandProp:AppBrandProps
}

export const Brand = ({AppBrandProp}: AppBrandPropProps) => {
  return (
    <>
      <S.IImage
          src={AppBrandProp.img}
          width={AppBrandProp.width}
          height={AppBrandProp.height}
      />
      <S.LText>{AppBrandProp.brand}</S.LText> 
    </>
  )

} 


const NavBar = ({
  NavPages, 
  NavProgress,
  AppBrand
}:NavProps) => {

  const [activepage,setActivepage] = useState(1);

  const page = useEffect(()=>{
    console.log(activepage);
  },[activepage]);

  const __pageSection = (NavPage: NavPagesProps) => {
    return (
      <div id={`${NavPage.id}`}>
        <S.PageSectionContainer activepg={activepage==NavPage.id} onClick={()=> setActivepage(NavPage.id)} >
          <div className="me-2">
            <S.Icon>
              {NavPage.name === "Home" ? <ChartPieIcon /> : <></>}
              {NavPage.name === "Training" ? <Cog8ToothIcon /> : <></>}
              {NavPage.name === "Progress" ? <UserGroupIcon /> : <></>}
              {NavPage.name === "Statistics" ? <Cog8ToothIcon /> : <></>}
              {NavPage.name === "Settings" ? <Cog8ToothIcon /> : <></>}
              {NavPage.name === "Logout" ? <LogoutIcon /> : <></>}
            </S.Icon>
          </div>

          <S.Text activepg={activepage==NavPage.id}>{NavPage.name}</S.Text>
        
        </S.PageSectionContainer>
      </div>
    )
  }

  const __pages = () => {
    return (
      <>
        {NavPages.map((NavPage: NavPagesProps) => (
          <S.CCol className="mt-4">{__pageSection(NavPage)}</S.CCol>
        ))}
      </>
    );
  }
 
  return (
    <>
      <S.SContainer>
        <S.BrandContainer>
          <Brand AppBrandProp={AppBrand}/>
        </S.BrandContainer>
        <S.PagesContainer>
          {__pages()}
        </S.PagesContainer> 
        <S.ProgressCard>
          <S.CardHeader>{"Today's Progress"}</S.CardHeader>
          <S.ProgressBar>{"67%"}</S.ProgressBar>
          <S.ProgressFooter>
            <S.SText>
              {"Finish today's program and get"}
            </S.SText>
            <S.RewardDiv>
              <S.SText>
                {10}
              </S.SText>
            </S.RewardDiv>
          </S.ProgressFooter>
        </S.ProgressCard> 
      </S.SContainer>
    </>
  )
}

export default NavBar
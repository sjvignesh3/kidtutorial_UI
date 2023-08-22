
import { LGContainer } from './styles'
import NavBar from '../../components/NavBar/NavBar'
import Dashboard from '../../components/Dashboard/Dashboard'
import { NavPages, NavProgress, AppBrand } from '../AppData'
const Home = () => {
  return (
    <LGContainer>
      <NavBar NavPages={NavPages} NavProgress={NavProgress} AppBrand={AppBrand}/>
      <Dashboard/>
    </LGContainer>
  )
}

export default Home
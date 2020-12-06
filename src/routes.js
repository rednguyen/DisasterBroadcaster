import HomePage from "./pages/HomePage/HomePage";
import AllNews from "./pages/Post/AllNews";
import AllPost from "./pages/Post/AllPost";
import OnePost from "./pages/Post/OnePost";
import CountryHomePage from "./pages/CountryPage/CountryHomePage";
import Guide from "./pages/Guide/Guide";
import About from "./pages/About/AboutUs";
import LoginPage from './pages/LoginAndSignUp/LoginPage'
import SignUpPage from './pages/LoginAndSignUp/SignUpPage'
import {Route} from 'react-router-dom'
import PwResetPage from "./pages/LoginAndSignUp/PwResetPage";
import CreateNewPwPage from "./pages/LoginAndSignUp/CreateNewPwPage";
import Post from "./pages/Post/Post"
import Earthquake from "./pages/Guide/Disasters/Earthquake";
import Wildfire from "./pages/Guide/Disasters/Wildfire";
import Volcano from "./pages/Guide/Disasters/Volcano";
import Flood from "./pages/Guide/Disasters/Flood";
import Tornado from "./pages/Guide/Disasters/Tornado";
import Hurricane from "./pages/Guide/Disasters/Hurricane";
import Drought from "./pages/Guide/Disasters/Drought";
import Tsunami from "./pages/Guide/Disasters/Tsunami";
import Country from "./pages/CountryPage/CountryPage";

const BaseRouter = () => (
  <div>
    <Route path="/" component = {HomePage} exact />
    <Route path="/allnews" component = {AllNews} exact />
    <Route path="/allpost" component = {AllPost} exact />
    <Route path="/post/:id" component = {OnePost} exact />
    <Route path="/post" component = {Post} exact />
    <Route path="/guide" component = {Guide} exact />
    <Route path="/about" component = {About} exact />
    <Route path = '/login' component = {LoginPage} exact />
    <Route path = '/signup' component = {SignUpPage} exact />   
    <Route path = '/pwreset' component = {PwResetPage} exact />  
    <Route path = '/createnewpw' component = {CreateNewPwPage} exact />
    <Route path="/post" component = {Post} exact />
    <Route path="/searchbycountry" component = {Country} exact />
    <Route path="/country/:id" component = {CountryHomePage} exact />

    {/* Guide:  */}
    <Route path="/earthquake" component = {Earthquake} exact />
    <Route path="/wildfire" component = {Wildfire} exact gi/>
    <Route path="/volcano" component = {Volcano} exact />
    <Route path="/flood" component = {Flood} exact />
    <Route path="/tornado" component = {Tornado} exact />
    <Route path="/hurricane" component = {Hurricane} exact />
    <Route path="/drought" component = {Drought} exact />
    <Route path="/tsunami" component = {Tsunami} exact />
  </div>
)

export default BaseRouter;
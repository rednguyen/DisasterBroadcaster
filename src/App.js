import HomePage from "./pages/HomePage/HomePage";
import Guide from "./pages/Guide/Guide";
import About from "./pages/About/AboutUs";
import LoginPage from './pages/LoginAndSignUp/LoginPage'
import SignUpPage from './pages/LoginAndSignUp/SignUpPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
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

function App() {
    return (
      <BrowserRouter> 
        <div className="App">
        <Switch> 
          <Route path="/" component = {HomePage} exact />  
          <Route path="/guide" component = {Guide} exact />
          <Route path="/about" component = {About} exact />
          <Route path = '/login' component = {LoginPage} exact />  
          <Route path = '/signup' component = {SignUpPage} exact />   
          <Route path = '/pwreset' component = {PwResetPage} exact />  
          <Route path = '/createnewpw' component = {CreateNewPwPage} exact />
          {/* Guide:  */}
          <Route path="/earthquake" component = {Earthquake} exact />
          <Route path="/wildfire" component = {Wildfire} exact gi/>
          <Route path="/volcano" component = {Volcano} exact />
          <Route path="/flood" component = {Flood} exact />
          <Route path="/tornado" component = {Tornado} exact />
          <Route path="/hurricane" component = {Hurricane} exact />
          <Route path="/drought" component = {Drought} exact />
          <Route path="/tsunami" component = {Tsunami} exact />
          <Route path="/post" component = {Post} exact />
          <Route path="/country" component = {Country} exact />
        </Switch> 
        </div>
      </BrowserRouter>

    )
}

export default App;

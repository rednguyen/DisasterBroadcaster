import HomePage from "./pages/HomePage/HomePage";
import Guide from "./pages/Guide/Guide";
import About from "./pages/About/AboutUs";
import LoginPage from './pages/LoginAndSignUp/LoginPage'
import SignUpPage from './pages/LoginAndSignUp/SignUpPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PwResetPage from "./pages/LoginAndSignUp/PwResetPage";
import CreateNewPwPage from "./pages/LoginAndSignUp/CreateNewPwPage";

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
        </Switch> 
        </div>
      </BrowserRouter>

    )
}

export default App;

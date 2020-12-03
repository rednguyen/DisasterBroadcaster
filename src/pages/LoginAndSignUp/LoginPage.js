import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import Login from '../../components/Auth/Login';
import "./Background.css"

class SignInPage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "login"><Login/></div>
              <div className = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default SignInPage;
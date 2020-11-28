
import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import Login from '../../components/Auth/Login';
//ssss
class SignInPage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><Login/></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default SignInPage;
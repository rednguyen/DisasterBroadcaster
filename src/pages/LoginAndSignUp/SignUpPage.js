import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import "./Background.css"
import SignUp from '../../components/Auth/SignUp';

class SignUpPage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "signup"><SignUp/></div>
              <div className = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default SignUpPage;


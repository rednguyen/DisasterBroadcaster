
import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import SignUp from '../../components/Auth/SignUp';

class SignUpPage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><SignUp/></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default SignUpPage;
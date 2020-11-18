import LoginBody from '../../components/Login/LoginBody';
import './Login.css';
import { Component } from 'react';


class Login extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className = "Body"><LoginBody/></div>
            </div>
          )
    };  
}

export default Login;
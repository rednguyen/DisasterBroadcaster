import SignupBody from '../../components/Signup/SignupBody';
import './Signup.css';
import { Component } from 'react';

class Signup extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className = "Body"><SignupBody/></div>
            </div>
          )
    };  
}

export default Signup;
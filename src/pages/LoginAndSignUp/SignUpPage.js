import { Component } from 'react';
import "./Background.css"
import SignUp from '../../components/Auth/SignUp';

class SignUpPage extends Component {
    render(){
        return (
            <div className = "signup"><SignUp/></div>
        )
    };  
}

export default SignUpPage;


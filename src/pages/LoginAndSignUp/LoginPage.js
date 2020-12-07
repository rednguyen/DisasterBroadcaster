import { Component } from 'react';
import Login from '../../components/Auth/Login';
import "./Background.css"

class SignInPage extends Component {
    render(){
        return (
            <div className = "login"><Login/></div>
        )
    };  
}

export default SignInPage;
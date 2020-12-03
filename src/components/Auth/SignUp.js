import React, {Component} from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { CountryDropdown} from 'react-country-region-selector';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        comfirm_password: '',
        username: '',
        age: null ,
        country: '',
        security_question: ''
    }

selectCountry (val) {
        this.setState({ country: val });
      }
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
} 
handleSubmit = (e) => {
    e.preventDefault(this.state)
    console.log(this.state)
} 

render(){

    const { country } = this.state;
    return (
        <Container component="main" maxWidth = "sm">
        <div className = "container">
            <form onSubmit={this.handleSubmit}>
                <h5 className= "grey-text text-darken-3">Sign Up</h5>
                
                <div className = "input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={this.handleChange}/>
                </div>
                                    
                <label>Country</label>
                <div>
                <CountryDropdown className = "browser-default"
                    value={country}
                    onChange={(val) => this.selectCountry(val)} />              
                </div>
                
                <div className = "input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>

                <div className = "input-field">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>

                <div className = "input-field">
                    <label htmlFor="comfirm_password">Comfirm Password</label>
                    <input type="password" id="comfirm_password" onChange={this.handleChange}/>
                </div>

                <div className = "input-field">
                    <label htmlFor="security_question">Security Question: What is your mother's middle name?</label>
                    <input className="input-field" type="text" id="security_question" onChange={this.handleChange}/>
                </div>

                <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
                
                <div className = "input-field">
                    <button className = "btn  blue darken-3 z-depth-0">Sign Up</button>
                </div>
                
            </form>
        </div>
        </Container>
        )
    }
}
// export default SignIn;
export default SignUp;
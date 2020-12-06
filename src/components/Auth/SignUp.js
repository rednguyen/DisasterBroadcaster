import React, {Component} from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { CountryDropdown} from 'react-country-region-selector';
import { countries } from "../../api-services/countries";

import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        username: '',
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
  e.preventDefault();
  console.log(this.state.security_question)
  this.props.onAuth(
    this.state.username,
    this.state.password,
    this.state.email,
    countries[this.state.country],
    this.state.security_question
  );
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

const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, password, email, country_id, answer) => dispatch(actions.authSignup(username, password, email, country_id, answer)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

import React, { Component } from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { CountryDropdown } from 'react-country-region-selector';
import UserServices from "../../api-services/User";
import { countries } from "../../api-services/countries";
const userServices = new UserServices();
const initialState = {
    username: '',
    email: '',
    password: '',
    country: '',
    security_question: '',

    usernameError: '',
    passwordError: '',
    emailError: '',
    countryError: '',
    answerError: '',

    invalidError: ''
}
class SignUp extends Component {
    state = initialState

    selectCountry(val) {
        this.setState({ country: val });
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(this.state)
        const user = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            country_id: countries[this.state.country],
            answer: this.state.security_question
        };
        if (this.state.username && this.state.password && this.state.email && this.state.country
            && this.state.security_question) {
            userServices.create(user)
                .then(
                    res => {
                        console.log(res);
                    }).catch(
                        err => {
                            
                            console.log(err)
                            this.setState({
                                invalidError: "err.response.data.message"
                            })
                        }
                    )
        }
        if (!this.state.username) {
            this.setState({ usernameError: "*Username is required" })
        }
        if (!this.state.password) {
            this.setState({ passwordError: "*Password cannot be Empty" })
        }
        if (!this.state.email) {
            this.setState({ emailError: "*Email is required" })
        }
        if (!this.state.country) {
            this.setState({ countryError: "*Please select your country" })
        }
        if (!this.state.security_question) {
            this.setState({ answerError: "*Security answer is required" })
        }
    }


    render() {
        console.log("xxx ", this.state.invalidError)
        const { country } = this.state;
        return (
            <Container component="main" maxWidth="sm">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Sign Up</h5>

                        {this.state.invalidError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.invalidError}
                        </div> : null}

                        <div className="input-field">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={this.handleChange} />
                        </div>

                        {this.state.usernameError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.usernameError}
                        </div> : null}

                        <label>Country</label>
                        <div>
                            <CountryDropdown className="browser-default"
                                value={country}
                                onChange={(val) => this.selectCountry(val)} />
                        </div>

                        {this.state.countryError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.countryError}
                        </div> : null}

                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>

                        {this.state.emailError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}
                        </div> : null}

                        <div className="input-field">
                            <label htmlFor="password">password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>

                        {this.state.passwordError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}
                        </div> : null}

                        <div className="input-field">
                            <label htmlFor="security_question">Security Question: What is your mother's middle name?</label>
                            <input className="input-field" type="text" id="security_question" onChange={this.handleChange} />
                        </div>

                        {this.state.answerError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.answerError}
                        </div> : null}

                        <Link href="/login" variant="body2">
                            {"Already have an account? Login"}
                        </Link>

                        <div className="input-field">
                            <button className="btn  blue darken-3 z-depth-0">Sign Up</button>
                        </div>


                    </form>
                </div>
            </Container>
        )
    }
}
// export default SignIn;
export default SignUp;

// if (err.response) {
                            //     // Request made and server responded
                            //     console.log(err.response.data);
                            //     console.log(err.response.status);
                            //     console.log(err.response.headers);
                            //   } else if (err.request) {
                            //     // The request was made but no response was received
                            //     console.log(err.request);
                            //   } else {
                            //     // Something happened in setting up the request that triggered an Error
                            //     console.log('Error', err.message);
                            //   }
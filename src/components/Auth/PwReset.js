import React, { Component } from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import UserServices from "../../api-services/User";
import Grid from '@material-ui/core/Grid';
import axios from "axios"
import { Redirect } from 'react-router-dom';
const userServices = new UserServices();
// const useStyles = makeStyles()

class PwReset extends Component {
    state = {
        email: '',
        security_question: '',

        emailError: '',
        answerError: '',
        invalidError: '',
        Valid: false

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(this.state)
        console.log(this.state)
        const user = {
            email: this.state.email,
            answer: this.state.security_question
        };
        if (this.state.email && this.state.security_question) {
            axios.post('https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/password-reset/', user)
                .then(
                    res => {
                        console.log(res);
                        this.setState({ loggedIn: true })
                    }).catch(
                        err => {
                            console.log(err);
                            this.setState({
                                invalidError: "*Please enter the correct Email/Answer"
                            })
                        }
                    )
        }
        if (!this.state.email) {
            this.setState({ emailError: "*Email is required" })
        }
        if (!this.state.security_question) {
            this.setState({ answerError: "*Security answer is required" })
        }
    }

    render() {
        
        if (this.state.loggedIn) {
            return <Redirect to={'createnewpw'} />
        }

        return (
            <Container component="main" maxWidth="sm">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Password Reset</h5>
                        
                        {this.state.invalidError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.invalidError}
                        </div> : null}

                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        {this.state.emailError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}
                        </div> : null}

                        <div className="input-field">
                            <label htmlFor="security_question">Security Question: What is your mother's middle name?</label>
                            <input className="input-field" type="text" id="security_question" onChange={this.handleChange} />
                        </div>

                        {this.state.answerError? <div style={{ fontSize: 12, color: "red" }}>{this.state.answerError}
                        </div> : null}

                        <div className="input-field">
                            <Grid container>
                                <Grid container xs={12} sm={6}>
                                <button className="btn  blue darken-3 z-depth-0">Next</button>
                                </Grid>
                                <Grid container xs={12} sm={6} justify="flex-end">
                                    <button onClick={(e) => { e.preventDefault(); window.location.href = '/login' }} className="btn  blue darken-3 z-depth-0" href="/about">Back</button>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </div>
            </Container>
        )
    }
}
// export default SignIn;
export default PwReset;
// onClick={(e) => {e.preventDefault(); window.location.href='/createnewpw'}}
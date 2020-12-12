import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import UserServices from "../../api-services/User";
import Grid from '@material-ui/core/Grid';

const userServices = new UserServices();

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
        const user = { 
            email: this.state.email,
            answer: this.state.security_question 
        };
        userServices.passwordReset(user)
        .then(
            res => {
                if(res.status !== 200){
                  throw new Error(res.status)
                }
                const token = res.data.token;
                const expirationDate = new Date(new Date().getTime() + 3600* 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                alert("Please check your email - we have sent a password reset link!");
            }).catch(
                err => {
                    console.log(err);
                    this.setState({
                      invalidError: "*Please enter the correct Email/Answer"
                  })  
                }
            )
        if (!this.state.email) {
          this.setState({ emailError: "*Email is required" })
        }
        if (!this.state.security_question) {
            this.setState({ answerError: "*Security answer is required" })
        }
    } 

    render() {
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
                            <label htmlFor="security_question">Question: middle name of the person you know most?</label>
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

export default PwReset;

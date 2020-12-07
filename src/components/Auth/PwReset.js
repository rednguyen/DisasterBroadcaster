import React, {Component} from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import UserServices from "../../api-services/User";
import Grid from '@material-ui/core/Grid';


const userServices = new UserServices();

class PwReset extends Component {
    state = {
        email: '',
        security_question: ''
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
        }).catch(
            err => {
                console.log(err);     
            }
        )
} 

render(){
    return (
        <Container component="main" maxWidth = "sm">
        <div className = "container">
            <form onSubmit={this.handleSubmit}>
                <h5 className= "grey-text text-darken-3">Password Reset</h5>
                <div className = "input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className = "input-field">
                    <label htmlFor="security_question">Security Question: What is your mother's middle name?</label>
                    <input className="input-field" type="text" id="security_question" onChange={this.handleChange}/>
                </div>
                <div className = "input-field">  
                <Grid container>
                <Grid container xs={12} sm={6}>
                <button className = "btn  blue darken-3 z-depth-0" href="/createnewpw">Next</button>
                </Grid>
                <Grid container xs={12} sm={6} justify="flex-end">
                <button onClick={(e) => {e.preventDefault(); window.location.href='/login'}} className = "btn  blue darken-3 z-depth-0" href="/about">Back</button>
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
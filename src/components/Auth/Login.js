import React, {Component} from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import UserServices from "../../api-services/User";
import "./auth.css"
import axios from "axios"
import { Redirect } from "react-router-dom";
// const useStyles = makeStyles()
const userServices = new UserServices();

class Login extends Component {
    state = {
        username: '',
        password: '',
        loggedIn: false
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
        username: this.state.username, 
        password: this.state.password,
    };
    axios.post('https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/user-authenticate/',
    user)
    .then(
        res => {
            let responseJSON = res; 
            sessionStorage.setItem('userData', responseJSON)   
            this.setState({loggedIn: true})
            // console.log(res)

        }).catch(
            err => {
                console.log(err.message);     
            }
        )
    //userServices.login(user)
} 

render(){
    if(this.state.loggedIn){
        return <Redirect to= {'/'}/>
    }
    if(sessionStorage.getItem("userData")){
        return <Redirect to= {'/'}/>
    }
    return (
        
        <Container component="main" maxWidth = "sm">
        <div className = "container">
            <form onSubmit={this.handleSubmit} className = "white" class = "form1">
                <h5 className= "grey-text text-darken-3">Login</h5>
                <div className = "input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={this.handleChange}/>
                </div>
                <div className = "input-field">
                    <label htmlFor="password">password</label> 
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <Grid container>
                <Grid container xs={12} sm={6}>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
                <Grid container xs={12} sm={6} justify="flex-end">
                <Link href="/pwreset" variant="body2" >
                  {"Forget Password"}
                </Link>
                </Grid>
                </Grid>
                <div className = "input-field">
                <button className = "btn  blue darken-3 z-depth-0">Login</button>
                
                </div>
            </form>
        </div>
        </Container>
        )
    }
}
// export default SignIn;
export default Login;



import React, {Component} from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import "./auth.css"

// const useStyles = makeStyles()

class Login extends Component {
    state = {
        email: '',
        password: ''
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
    return (
        <div className = "LoginBackground">
        <Container component="main" maxWidth = "sm" className = "loginBackground">
        <div className = "container">
            <form onSubmit={this.handleSubmit} className = "white" class = "form1">
                <h5 className= "grey-text text-darken-3">Login</h5>
                <div className = "input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
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
        </div>
        )
    }
}
// export default SignIn;
export default Login;



import React, {Component} from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "./auth.css"
import { Redirect } from "react-router-dom";
import {Spin} from 'antd';
import Icon from '@ant-design/icons';

import * as actions from '../../actions/auth';
import { connect } from 'react-redux';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Login extends Component {
  state = {
      username: '',
      password: '',
      loggedIn: ''
  }
  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  } 
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.loggedIn = true;
    this.props.onAuth(this.state.username, this.state.password);
  } 

  render(){
      let errorMessage = null;
      if(this.props.isAuthenticated){
        return <Redirect to= {'/'}/>;
      } else {
        errorMessage = "Please enter in valid credentials.";
      }

      return (
        <div>
          
          {
            this.props.loading ?

            <Spin indicator={antIcon} />

            :
        
        <Container component="main" maxWidth = "sm">
        <div className = "container">
        
            <form onSubmit={this.handleSubmit} className = "white" class = "form1">
              {errorMessage}
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
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null && state.token != undefined
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);




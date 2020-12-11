import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
import "./auth.css";
import Grid from "@material-ui/core/Grid";
import UserServices from "../../api-services/User";

const userServices = new UserServices();

class CreateNewPw extends Component {
    state = {
        new_password: '',
        message: '',
        saved: false
        
}
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
} 
handleSubmit = (e) => {
    e.preventDefault(this.state)
    console.log(this.state)
    const token = localStorage.getItem('token')
    const reset = { 
      new_password: this.state.new_password,
      token: token
    };

    userServices.changePassword(reset)
    .then(
      res => {
          if(res.status !== 200){
            this.setState({ message: "Invalid!" });
            throw new Error(res.status)
          }
          this.setState({
            saved: true,
          })
          alert("Password reset successful!");
      }).catch(
          err => {
              console.log(err);     
          }
      )
  } 

  render() {
    if (this.state.saved) {
      return <Redirect to={"/profile"} />;
    }
    return (
        <Container component="main" maxWidth = "sm">
        <div className = "container">
            <form onSubmit={this.handleSubmit} >
                
                <h5 className= "grey-text text-darken-3">Create New Password</h5>
                
                <div className = "input-field">
                    <label htmlFor="new_password">New Password</label>
                    <input type="password" id="new_password" onChange={this.handleChange}/>
                </div>

                <div className = "input-field">
                {this.state.message}
                <Grid container>
                    <Grid container xs={12} sm={6}>
                        <button className = "btn  blue darken-3 z-depth-0" href="/about">Reset</button>
                </Grid>
                <Grid container xs={12} sm={6} justify="flex-end">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/PwReset";
                    }}
                    className="btn  blue darken-3 z-depth-0"
                    href="/about"
                  >
                    Back
                  </button>
                </Grid>
              </Grid>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
// export default SignIn;
export default CreateNewPw;

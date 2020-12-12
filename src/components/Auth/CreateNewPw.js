import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "./auth.css";
import UserServices from "../../api-services/User";

const userServices = new UserServices();

class CreateNewPw extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        new_password: '',
        message: '',
        saved: false
      };
    }

  handleChange = (e) => {
      this.setState({
          [e.target.id]: e.target.value
      })
  } 
  
  handleSubmit = (e) => {
      e.preventDefault(this.state)
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
            const user = {
              id: res.data.id,
              username: res.data.username,
              avatar: res.data.avatar
            };
            localStorage.setItem('user', JSON.stringify(user));
            userServices.login(user.username, this.state.new_password)
            alert("Password reset successful!");
            window.location.href = "/profile";
        }).catch(
            err => {
                console.log(err);     
            }
        )
  } 

  render() {
    return (
        <Container component="main" maxWidth = "2sm">
        <div className = "container-input">
            <form onSubmit={this.handleSubmit} >
                
                <h5 className= "grey-text text-darken-3">Create New Password</h5>
                
                <div className = "input-field">
                    <label htmlFor="new_password">New Password</label>
                    <input type="password" id="new_password" onChange={this.handleChange}/>
                </div>

                <div className = "input-field">
                {this.state.message}
                <button className = "btn  blue darken-3 z-depth-0" style={{float:"right"}}>Reset</button>

            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default CreateNewPw;

import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import "./auth.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import UserServices from "../../api-services/User";

const userServices = new UserServices();
class CreateNewPw extends Component {
  state = {
    new_password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(this.state);
    console.log(this.state);

    const user = {
      new_password: this.state.new_password,
    };
    axios
      .post(
        "https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/password-reset/"
      )
      // userServices.passwordReset()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Container component="main" maxWidth="sm">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create New Password</h5>

            <div className="input-field">
              <label htmlFor="new_password">New Password</label>
              <input
                type="password"
                id="new_password"
                onChange={this.handleChange}
              />
            </div>
            {/* <div className = "input-field">
                    <label htmlFor="new_comfirm_password">Comfirm New Password</label>
                    <input type="password" id="new_comfirm_password" onChange={this.handleChange}/>
                </div> */}
            <div className="input-field">
              <Grid container>
                <Grid container xs={12} sm={6}>
                  <button
                    className="btn  blue darken-3 z-depth-0"
                    href="/about"
                  >
                    Reset
                  </button>
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

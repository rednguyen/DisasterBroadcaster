import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./auth.css";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions/auth";
import { connect } from "react-redux";

const initialState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
};

class Login extends Component {
  state = initialState;
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(this.state);
    if (this.state.username && this.state.password) {
      this.props.onAuth(this.state.username, this.state.password);
    }
    if (!this.state.username) {
      this.setState({ usernameError: "*Username is required" });
    }
    if (!this.state.password) {
      this.setState({ passwordError: "*Password cannot be Empty" });
    }
  };

  render() {
    if (this.props.isauthenticated) {
      return <Redirect to={"/"} />;
    }

    let errorMessage = "";
    if (this.props.error === null) {
      errorMessage = "";
    } else {
      errorMessage = "*Username/Password incorrect";
    }

    return (
      <Container component="main" maxWidth="sm">
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white" class="form1">
            <h5 className="grey-text text-darken-3">Login</h5>

            {errorMessage ? (
              <div style={{ fontSize: 12, color: "red" }}>{errorMessage}</div>
            ) : null}

            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={this.handleChange} />
            </div>
            {this.state.usernameError ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.usernameError}
              </div>
            ) : null}

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            {this.state.passwordError ? (
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.passwordError}
              </div>
            ) : null}

            <Grid container>
              <Grid container xs={12} sm={6}>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              <Grid container xs={12} sm={6} justify="flex-end">
                <Link href="/pwreset" variant="body2">
                  {"Forget Password"}
                </Link>
              </Grid>
            </Grid>
            <div className="input-field">
              <button className="btn  blue darken-3 z-depth-0">Login</button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    isauthenticated: state.token !== null && state.token !== undefined,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

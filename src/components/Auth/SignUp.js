import React, { Component } from 'react'
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import countries from "../Profile/countries";
import Select from "react-select";
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import { Redirect } from "react-router-dom";
import "./SignUp.css";

const images = [
  {
    name: "moon",
    src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815448.svg",
  },
  {
    name: "cloudy",
    src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815389.svg",
  },
  {
    name: "sunny",
    src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815445.svg",
  },
  {
    name: "wind",
    src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815323.svg",
  },
  {
    name: "snowflake",
    src: "https://www.flaticon.com/svg/static/icons/svg/3815/3815402.svg",
  },
];

const initialState = {
  username: '',
  email: '',
  password: '',
  country_id: '',
  country_name: '',
  security_question: '',
  avatar: images[3].src,

  usernameError: '',
  passwordError: '',
  emailError: '',
  countryError: '',
  answerError: '',

  invalidError: ''
}

class SignUp extends Component {
  state = initialState

  handleCountryChange = (country) => {
    var index = countries.indexOf(country);
    this.setState({
      country_name: countries[index],
      country_id: index,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleChangeAvatar = (img) => {
    this.setState({ avatar: img });
    let newAvatar = document.createElement("img");
    newAvatar.src = img;
    newAvatar.className = "avatar";
    document
      .querySelector("div.profile")
      .removeChild(document.querySelector("img.avatar"));
    document.querySelector("div.profile").appendChild(newAvatar);
  };



  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password && this.state.email && this.state.country_id
      && this.state.security_question && this.state.avatar) {
      this.props.onAuth(
        this.state.username,
        this.state.password,
        this.state.email,
        this.state.country_id,
        this.state.security_question,
        this.state.avatar
      );
    }
    if (!this.state.username) {
      this.setState({ usernameError: "*Username is required" })
    }
    if (!this.state.password) {
      this.setState({ passwordError: "*Password cannot be Empty" })
    }
    if (!this.state.email) {
      this.setState({ emailError: "*Email is required" })
    }
    if (!this.state.country_id) {
      this.setState({ countryError: "*Please select your country" })
    }
    if (!this.state.security_question) {
      this.setState({ answerError: "*Security answer is required" })
    }
    this.setState({
      invalidError: this.props.error
    })

  }

  render() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      return <Redirect to={'/'} />;
    }
    let errorMessage = "";
    if (this.props.error === null) {
      errorMessage = "";
    } else {
      errorMessage = "*Username/Email already exist";
    }
    
    return (
      <Container component="main" maxWidth="sm">

        <div className="container">
          <p className="chooseAnAvatar">Choose an avatar</p>
          <div className="profile">
            <img src={images[3].src} className="avatar" alt='' />
          </div>
          <div className="avatarOptions">
            {images.map((image, i) => {
              return (
                <img
                  src={image.src}
                  className="avatarOption"
                  onClick={(e) => {
                    this.handleChangeAvatar(e.target.currentSrc);
                  }}
                  alt=''
                />
              );
            })}
          </div>
          <form className="signUpForm" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            
            {this.state.countryError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.countryError}
            </div> : null}
            <label>Country</label>
            <Select
              name="country"
              options={countries}
              value={this.state.country_name}
              onChange={(value) => this.handleCountryChange(value)}
              defaultValue={{ label: "United States", value: "US" }}
            />
            {this.state.countryError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.countryError}
            </div> : null}

            {errorMessage ? <div style={{ fontSize: 12, color: "red" }}>{errorMessage}
            </div> : null}

            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={this.handleChange} />
            </div>

            {this.state.usernameError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.usernameError}
            </div> : null}

            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>

            {this.state.emailError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}
            </div> : null}

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div>

            {this.state.passwordError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}
            </div> : null}

            <div className="input-field">
              <label htmlFor="security_question">What was your first car?</label>
              <input className="input-field" type="text" id="security_question" onChange={this.handleChange} />
            </div>

            {this.state.answerError ? <div style={{ fontSize: 12, color: "red" }}>{this.state.answerError}
            </div> : null}

            <Link href="/login" variant="body2">
              {"Already have an account? Login"}
            </Link>

            <div className="input-field">
              <button className="btn  blue darken-3 z-depth-0">Sign Up</button>
            </div>
          </form>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password, email, country_id, answer, avatar) => dispatch(actions.authSignup(username, password, email, country_id, answer, avatar))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

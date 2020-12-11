import React, { Component } from "react";
import { Menu } from "./Menu";
import "./NavBar.css";
import Logo from "./Logo.png";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import UserServices from "../../api-services/User";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = { clicked: false };
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      avatar: null,
      userId: null,
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const token_data = {
      token: localStorage.getItem("token"),
    };
    let userServices = new UserServices();

    userServices.currentUser(token_data).then((res) => {
      console.log(res.data);
      this.setState({
        avatar: res.data.avatar,
        userId: res.data.id,
      });
    });
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      console.log("Call");
    } else {
      this.setState({ redirect: true });
    }
  }

  logout() {
    // userServices.logout()
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({
      redirect: true,
    });
    window.location.href = "/";
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    if (!this.state.redirect || this.props.isauthenticated) {
      return (
        <nav className="NavbarItems">
          <img className="navbar-logo" src={Logo} alt="" />
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <>
              {Menu.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </>
          </ul>
          <Button
            onClick={(e) => {
              e.preventDefault();
              this.props.onLogout();
            }}
          >
            Logout
            <span>&nbsp;&nbsp;</span>
            <i class="fas fa-user"></i>
          </Button>
          <ul>
            <NavLink
              to="/profile"
              className="btn btn-floating blue darken-3 avatarSmall"
            >
              <img
                src={
                  this.props.user === null || this.props.user === undefined
                    ? null
                    : this.props.user.avatar
                }
                alt=""
                className="avatarSmall"
              />
            </NavLink>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="NavbarItems">
          <img className="navbar-logo" src={Logo} alt="" />
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <>
              {Menu.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </>
          </ul>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/login";
            }}
          >
            Login
            <span>&nbsp;&nbsp;</span>
            <i class="fas fa-user"></i>
          </Button>
        </nav>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);

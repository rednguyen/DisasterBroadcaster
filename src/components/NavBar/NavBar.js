import React, { Component } from "react";
import { Menu } from "./Menu";
import "./NavBar.css";
import Logo from "./Logo.png";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import { NavLink } from "react-router-dom";
import UserServices from "../../api-services/User";

class NavBar extends Component {
  state = { clicked: false };
  componentDidMount() {
    const token_data = {
      token: localStorage.getItem("token"),
    };
    let userServices = new UserServices();

    userServices.currentUser(token_data).then((res) => {
      console.log(res.data);
      if (res.data.username.substring(0, 7) === "DELETED") {
        this.props.onLogout();
      }
      this.setState({
        avatar: res.data.avatar,
        userId: res.data.id,
      });
    });
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    var button = this.props.isAuthenticated ? (
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
    ) : (
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
    );

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
        {button}
        <ul>
          <NavLink
            to="/profile"
            className="btn btn-floating blue darken-3 avatarSmall"
          >
            <img src={this.state.avatar} alt="" className="avatarSmall" />
          </NavLink>{" "}
        </ul>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);

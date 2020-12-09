import React, { Component } from "react";
import { Menu } from "./Menu";
import "./NavBar.css";
import Logo from "./Logo.png";
import { Button } from "../Button/Button";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserServices from "../../api-services/User";

class NavBarTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
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
      if (res.data.username.substring(0, 7) === "DELETED") {
        this.props.onLogout();
      }
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
    return (
      <nav className="NavbarItems">
        <img className="navbar-logo" src={Logo} />
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
        </ul>{" "}
        <Button className="deleteaccount" onClick={this.logout}>
          Logout<span>&nbsp;&nbsp;</span>
          <i class="fas fa-user"></i>
        </Button>
        <ul>
          <NavLink
            to="/profile"
            className="btn btn-floating blue darken-3 avatarSmall"
          >
            <img src={this.state.avatar} alt="" className="avatarSmall" />
          </NavLink>
        </ul>
      </nav>
    );
  }
}
export default NavBarTwo;

import React, { Component } from 'react';
import {Menu} from "./Menu";
import './NavBar.css'
import Logo from './Logo.png';
import { NavLink } from "react-router-dom";
import {Button} from "../Button/Button"
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import UserServices from "../../api-services/User";



class NavBar extends Component{
    state = {
      clicked:false,
      // avatar: avatar,
      token: localStorage.getItem('token')
    }

    componentDidMount(){
      const token_data = {
        token: localStorage.getItem("token"),
      };

      let userServices = new UserServices();
      userServices.currentUser(token_data)
      .then(
        res => {
          this.setState({
            avatar: res.data.avatar
          })
      })
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
      var button = null;
      var link = null;
      console.log(this.props.user === null || this.props.user === undefined ? null: this.props.user.avatar);
      if(this.props.isauthenticated){
        button = <Button onClick={(e) => {
                    e.preventDefault();
                    this.props.onLogout();
                  }}>
                    Logout
                    <span>&nbsp;&nbsp;</span><i class="fas fa-user"></i>
                </Button>
        link = <NavLink
                to="/profile"
                className="btn btn-floating blue darken-3 avatarSmall"
              >
                <img src={this.props.user === null || this.props.user === undefined ? null: this.props.user.avatar} alt="" className="avatarSmall" />
              </NavLink>
      } else {
        button = <Button onClick={(e) => {e.preventDefault(); window.location.href='/login'}}>
                  Login
                  <span>&nbsp;&nbsp;</span><i class="fas fa-user"></i>
                </Button>

      }

        return(
            <nav className="NavbarItems">
                <img className="navbar-logo" src={Logo} alt=""/>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    <>{Menu.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className ={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )                        
                        })}     
                    </>
                </ul>
                {button}
                <ul>{link}</ul>
                
            </nav>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(NavBar);





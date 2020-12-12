import React, { Component } from 'react';
import {Menu} from "./Menu";
import './NavBar.css'
import Logo from './Logo.png';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import PersonIcon from '@material-ui/icons/Person';
import Link from "@material-ui/core/Link";

class NavBar extends Component{
    constructor(props) {
      super(props);
      this.state = { width: 0, height: 0, clicked:false };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
  
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
  
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
      var button = null;
      var link = null;

      if(this.props.isauthenticated){
        button = <Button variant="contained" color="secondary" onClick={(e) => {
                    e.preventDefault();
                    this.props.onLogout();
                  }} 
                  endIcon={<PersonIcon />}>
                    Logout
                 </Button>

        link = <NavLink
                to="/profile"
                className="btn btn-floating blue darken-3 avatarSmall"
              >
                <img src={this.props.user === null || this.props.user === undefined ? null: this.props.user.avatar} alt="" className="avatarSmall" />
              </NavLink>
      } else {
        button = <Button variant="contained" color="primary" href='/login' endIcon={<PersonIcon />}>
                  Login
                 </Button>
      }

        return(
            <div>
            {this.state.width > 1240 ? 
              <nav className="NavbarItems">
                <Link href="/" variant="body2"><img className="navbar-logo" src={Logo} alt=""/></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className='nav-menu'>
                    <>{Menu.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className = 'nav-links' href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )                        
                        })}     
                    </>
                    
                </ul>
                <ul>{button}</ul>
                <ul>{link}</ul>    
            </nav>
            : 
            <nav className="NavbarItems">
                <Link href="/" variant="body2"><img className="navbar-logo" src={Logo} alt=""/></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                {this.state.clicked ? 
                <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                    <>{Menu.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className ='nav-links' href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )                        
                        })} 
                    </>
                    <li>{button}</li>
                    <li>{link}</li>
                </ul>
                :''}
            </nav>}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(NavBar);

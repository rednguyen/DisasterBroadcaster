import React, { Component } from 'react';
import {Menu} from "./Menu";
import './NavBar.css'
import Logo from './Logo.png';
import {Button} from "../Button/Button"
import { Redirect } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

class NavBarTwo extends Component{
    // state = {
    //     clicked:false,
    //     redirect:false
    // }
    constructor(props) {
        super(props);
        this.state = {
          
          redirect: false
        };
        this.logout = this.logout.bind(this)
      }

    componentWillMount(){
        if(sessionStorage.getItem("userData")){
          console.log("Call")
        }
        else{
          this.setState({redirect:true})
        }
      }

    logout(){
        // userServices.logout()
        
        sessionStorage.setItem("userData","");
        sessionStorage.clear();
        this.setState({
          redirect:true
        })
        window.location.href='/'
      }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render(){
        return(
            <nav className="NavbarItems">
                <img className="navbar-logo" src={Logo}/>
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
                <Button onClick={this.logout}>Logout<span>&nbsp;&nbsp;</span><i class="fas fa-user"></i>
                  </Button>
                <ul><NavLink to='/' className ='btn btn-floating blue darken-3'>JM</NavLink> </ul>
            </nav>
        );
    }
}
export default NavBarTwo

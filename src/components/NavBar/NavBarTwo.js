import React, { Component } from 'react';
import {Menu} from "./Menu";
import './NavBar.css'
import Logo from './Logo.png';
import {Button} from "../Button/Button"

import {NavLink} from 'react-router-dom'

class NavBarTwo extends Component{
    state = {clicked:false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    // logout(){
    //     sessionStorage.setItem("userData","");
    //     sessionStorage.clear();
    // }

    render(){
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
                <Button onClick={(e) => {e.preventDefault(); window.location.href='/login'}}>
                    Logout
                    <i class="fas fa-user"></i>
                    </Button>
                <ul><NavLink to='/' className ='btn btn-floating blue darken-3'>JM</NavLink> </ul>
            </nav>
        );
    }
}
export default NavBarTwo

import React, { Component } from 'react';
import {Menu} from "./Menu";
import './NavBar.css'
import Logo from './Logo.png';
import {NavLink} from 'react-router-dom'
import {Button} from "../Button/Button"



class NavBar extends Component{
    state = {clicked:false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

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
                    Login
                    <span>&nbsp;&nbsp;</span><i class="fas fa-user"></i>
                    </Button>
                
            </nav>
        );
    }
}


export default NavBar




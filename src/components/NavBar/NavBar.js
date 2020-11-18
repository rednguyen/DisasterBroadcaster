import React, { Component } from 'react';
import {Menu} from "./Menu";
import './NavBar.css'
import Logo from './Logo.png';
import {Button} from "../Button/Button"

class NavBar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
              <img className="navbar-logo" src={Logo}/>
                <ul className="nav-menu">
                
                    {Menu.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className ={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )                        
                    })}
                </ul>    
                <Button onClick={(e) => {e.preventDefault(); window.location.href='/login'}}>
                    Login
                    <i class="fas fa-user"></i>
                    </Button>    
            </nav>
        );
    }
}


export default NavBar
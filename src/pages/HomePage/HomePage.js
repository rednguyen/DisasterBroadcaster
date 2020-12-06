import NavBar from '../../components/NavBar/NavBar';
import NavBarTwo from '../../components/NavBar/NavBarTwo';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Container/FooterContainer';
import './HomePage.css';
import { Component } from 'react';
import Slider from '../../components/Slider'
import Donate from '../../components/Donate/Donate'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Button} from "../../components/Button/Button"

import {Menu} from "../../components/NavBar/Menu";
import '../../components/NavBar/NavBar.css'
import Logo from './Logo.png';
import {NavLink} from 'react-router-dom'
class HomePage extends Component {
  
  
  constructor(props){
    super(props);
    this.state ={
      redirect: false
    }
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
    axios.post("https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/logout/")
    sessionStorage.setItem("userData","");
    sessionStorage.clear();
    this.setState({
      redirect:true
    })
  }

    render(){
      // if redirect = false, user didnt login in
      if(this.state.redirect){
        return (
          <div className="Wrapper">
          <div className="TopPage"><NavBar /></div>
          <Slider/>
          <div className = "Body"><Body/></div>
          <div id="DonateSection"> <Donate/></div>                
          <div class = "BottomPage"><Footer /></div>
        </div>
        )
      } else {
        return (
          <div className="Wrapper">  
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

            <Slider/>
            {/* <button type='button' className="button" onClick={this.logout}>Logout</button> */}
            
            <div className = "Body"><Body/></div>
            <div id="DonateSection"> <Donate/></div>                
            <div class = "BottomPage"><Footer /></div>
          </div>       
        )         
      }  
    };  
}


export default HomePage;
import React, { Component } from 'react';
import Footer from '../../components/Footer/Container/FooterContainer';
import NavBar from '../../components/NavBar/NavBar';
import AboutBody from '../../components/About/AboutBody'
import './AboutUs.css'
import NavBarTwo from '../../components/NavBar/NavBarTwo';


class AboutUs extends Component {
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
    sessionStorage.setItem("userData","");
    sessionStorage.clear();
    this.setState({
      redirect:true
    })
  }
  render(){
    if(this.state.redirect){
    return (
        <div className="Wrapper">
          <div className="TopPage"><NavBar /></div>
          <div className = "Body"><AboutBody /></div>
          <div class = "BottomPage"><Footer /></div>
        </div>   
      )
    }
      else{
        return (  
        <div className="Wrapper">
        <div className="TopPage"><NavBarTwo /></div>
        <div className="Body"><AboutBody /></div>
        <div class = "BottomPage"><Footer /></div>
      </div>
        )
      }
    }
  }

export default AboutUs;
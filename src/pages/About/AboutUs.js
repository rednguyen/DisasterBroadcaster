import React from 'react';
import Footer from '../../components/Footer/Container/FooterContainer';
import NavBar from '../../components/NavBar/NavBar';
import AboutBody from '../../components/About/AboutBody'
import './AboutUs.css'

const AboutUs = () =>{
    return(
        <div className="Wrapper">
        <div className="TopPage"><NavBar /></div>
        <div className="Body"><AboutBody /></div>
        <div class = "BottomPage"><Footer /></div>
      </div>
    )

}
export default AboutUs;
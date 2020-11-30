import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Container/FooterContainer';
import './HomePage.css';
import { Component } from 'react';
import Slider from '../../components/Slider'
import Donate from '../../components/Donate/Donate'


class HomePage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <Slider/>
              <div className = "Body"><Body/></div>
              <div id="DonateSection"> <Donate/></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default HomePage;
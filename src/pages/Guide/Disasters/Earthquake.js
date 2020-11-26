import NavBar from '../../../components/NavBar/NavBar';
import EarthquakeBody from '../../../components/Guide/Disasters/EarthquakeBody';
import Footer from '../../../components/Footer/Container/FooterContainer';
import './Manuals.css';
import { Component } from 'react';


class Earthquake extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><EarthquakeBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default Earthquake;
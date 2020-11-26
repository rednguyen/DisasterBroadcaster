import NavBar from '../../../components/NavBar/NavBar';
import WildfireBody from '../../../components/Guide/Disasters/WildfireBody';
import Footer from '../../../components/Footer/Container/FooterContainer';
import './Manuals.css';
import { Component } from 'react';


class Wildfire extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><WildfireBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default Wildfire;
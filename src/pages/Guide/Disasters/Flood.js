import NavBar from '../../../components/NavBar/NavBar';
import FloodBody from '../../../components/Guide/Disasters/FloodBody';
import Footer from '../../../components/Footer/Container/FooterContainer';
import './Manuals.css';
import { Component } from 'react';


class Flood extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><FloodBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default Flood;
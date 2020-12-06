import NavBar from '../../../components/NavBar/NavBar';
import TsunamiBody from '../../../components/Guide/Disasters/TsunamiBody';
import Footer from '../../../components/Footer/Container/FooterContainer';
import './Manuals.css';
import { Component } from 'react';


class Tsunami extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><TsunamiBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default Tsunami;
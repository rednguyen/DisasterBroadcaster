import NavBar from '../../../components/NavBar/NavBar';
import HurricaneBody from '../../../components/Guide/Disasters/HurricaneBody';
import Footer from '../../../components/Footer/Container/FooterContainer';
import './Manuals.css';
import { Component } from 'react';


class Hurricane extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><HurricaneBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default Hurricane;
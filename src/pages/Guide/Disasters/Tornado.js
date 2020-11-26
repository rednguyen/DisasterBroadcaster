import NavBar from '../../../components/NavBar/NavBar';
import TornadoBody from '../../../components/Guide/Disasters/TornadoBody';
import Footer from '../../../components/Footer/Container/FooterContainer';
import './Manuals.css';
import { Component } from 'react';


class Tornado extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><TornadoBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default Tornado;
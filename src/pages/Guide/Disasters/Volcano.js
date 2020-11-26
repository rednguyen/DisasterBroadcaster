import NavBar from '../../../components/NavBar/NavBar';
import VolcanoBody from '../../../components/Guide/Disasters/VolcanoBody';
import Footer from '../../../components/Footer/Container/FooterContainer';
import './Manuals.css';
import { Component } from 'react';


class Volcano extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><VolcanoBody /></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default Volcano;
import NavBar from '../../components/NavBar/NavBar';
import WorldBody from '../../components/World/WorldBody';
import Footer from '../../components/Footer/Container/FooterContainer';
import './World.css';
import { Component } from 'react';


class World extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "Body"><WorldBody/></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default World;
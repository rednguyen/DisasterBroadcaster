import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import './HomePage.css';
import Tsunami from "./Figure.jpg"
import { Component } from 'react';


class HomePage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "body">
                <img  src={Tsunami} height="1000" width="1000"/>
              </div>
                <div className = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default HomePage;
import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import PwReset from '../../components/Auth/PwReset';
import "./Background.css"

class PwResetPage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "PwReset"><PwReset/></div>
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default PwResetPage;
import NavBar from '../components/NavBar/NavBar';
import GuideBody from '../components/Guide/GuideBody.js';
import Body from '../components/Body/Container/BodyContainer';
import './HomePage.css';
import { Component } from 'react';


class Guide extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "body"><GuideBody /></div>
              <div class = "BottomPage"><Body /></div>
            </div>
          )
    };  
}

export default Guide;
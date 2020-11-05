import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Body from '../components/Body/Container/BodyContainer';
import './HomePage.css';
import { Component } from 'react';


class HomePage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              
              <div className = "BottomPage"><Footer /></div>
              <div class = "body"><Body /></div>
            </div>
          )
    };  
}

export default HomePage;
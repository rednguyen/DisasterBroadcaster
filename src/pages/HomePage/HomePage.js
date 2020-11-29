import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Container/FooterContainer';
import './HomePage.css';
import { Component } from 'react';
import Slider from '../../components/Slider'



class HomePage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <Slider/>
              <div className = "Body"><Body/></div>
              {/* <div className = "Blog"><Blog/></div> */}
              <div class = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default HomePage;

import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import Country from '../../components/Country/Country';
import "./CountryPage.css"

class CreateNewPwPage extends Component {
    render(){
        return (
            <div className="Wrapper">
              <div className="TopPage"><NavBar /></div>
              <div className = "countybg"><Country/></div>
              <div className = "BottomPage"><Footer /></div>
            </div>
          )
    };  
}

export default CreateNewPwPage;
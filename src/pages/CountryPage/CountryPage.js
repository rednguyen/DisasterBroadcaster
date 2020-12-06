
import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import Country from '../../components/Country/Country';
import "./CountryPage.css"

class CreateNewPwPage extends Component {
    render(){
        return (
            <div className = "countybg"><Country/></div>
          )
    };  
}

export default CreateNewPwPage;
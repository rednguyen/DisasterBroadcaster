
import { Component } from 'react';
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
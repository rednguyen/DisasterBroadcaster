import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import Paper from '@material-ui/core/Paper';
import { CountryDropdown} from 'react-country-region-selector';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import CreatePost from '../../components/CreatePost/CreatePost'

class BasicTextFields extends Component{
   
    render() {
        return(
        <div className="Wrapper">
            

        <CreatePost/>
         
        <div class = "BottomPage"><Footer /></div>
    </div>
        );
    }
}

export default BasicTextFields
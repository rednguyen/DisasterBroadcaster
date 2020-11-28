import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import Paper from '@material-ui/core/Paper';
import { CountryDropdown} from 'react-country-region-selector';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class BasicTextFields extends Component{
    state = {
        photo: '',
        content: '',
        country: '',
    }

    selectCountry (val) {
        this.setState({ country: val });
      }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 

      handleSubmit = (e) => {
        e.preventDefault(this.state)
        console.log(this.state)
    } 

    render() {
        const { country } = this.state;
        return(
        <div className="Wrapper">
            <div className="TopPage"><NavBar /></div>

        <Container component="main" maxWidth = "sm">
            <div className = "post">

            <h5>CREATE A NEW POST</h5>
            <TextField
                id="photo"
                type="file"
            />
            
            <h6>
                CONTENT
            </h6>
         
           
            <h6>
                COUNTRY
            </h6>

            <div>
                <CountryDropdown
                    value={country}
                    onChange={(val) => this.selectCountry(val)} />    
            </div>
                     
         
            
            <div className = "input-field">
                    <button className = "btn  blue darken-3 z-depth-0">Post</button>
            </div>
                  
         </div>
                    
         </Container>
         
        <div class = "BottomPage"><Footer /></div>
    </div>
        );
    }
}

export default BasicTextFields
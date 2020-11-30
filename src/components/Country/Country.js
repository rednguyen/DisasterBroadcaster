import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Container/FooterContainer';
import { CountryDropdown} from 'react-country-region-selector';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

class Country extends Component{
    state = {
        country: '',
    }

    selectCountry (val) {
        this.setState({ country: val });
      }
      handleSubmit = (e) => {
        e.preventDefault(this.state)
        console.log(this.state)
    } 

    render() {
        const { country } = this.state;
        return(
        <Container component="main" maxWidth = "sm">
          <form onSubmit={this.handleSubmit} className = "white">
          <div className = 'post'>
            <h5 className= "grey-text text-darken-3">SEARCH DISASTER BY WORLD</h5>
              <Grid item xs={12} sm={12}>     
              <CountryDropdown className = "browser-default"
              value={country}
                onChange={(val) => this.selectCountry(val)} />              
              </Grid>


              <div className = "input-field">
                <button className = "btn  blue darken-3 z-depth-0">SUBMIT</button>
              </div>
          </div>
          
           </form>
                    
         </Container>
        );
    }
}

export default Country
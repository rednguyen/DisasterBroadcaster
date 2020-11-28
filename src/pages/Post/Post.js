import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Container/FooterContainer';
import Paper from '@material-ui/core/Paper';
import Country from '../../components/Country/Country';

export default function BasicTextFields() {

  return (
    <div className="Wrapper">
        <div className="TopPage"><NavBar /></div>
        <Paper style = {{padding: 10}}>
        <div className = "post">

            <h1 >CREATE A NEW POST</h1>
            <TextField
                name="upload-photo"
                type="file"
            />
            
            <h2>
                CONTENT
            </h2>
            <label>  
                <textarea rows="20" cols = "50" />
            </label>
            <h2>
                COUNTRY
            </h2>
            <Country /> 
                  
        </div>
                    
       </Paper>
        <div class = "BottomPage"><Footer /></div>
    </div>
  );
}
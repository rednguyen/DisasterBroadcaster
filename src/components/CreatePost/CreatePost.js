import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { CountryDropdown} from 'react-country-region-selector';
import Container from '@material-ui/core/Container';
import PostServices from "../../api-services/Post";
import { countries } from "../../api-services/countries";
import UserServices from '../../api-services/User';
import axios from 'axios'


const postServices = new PostServices();

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            country: '',
            description: '',
            img: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

onChange(e) {
    this.setState({img:e.target.files['0']});
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
    const formData = new FormData();
    formData.append('myImage',this.state.file);
    const post = {
        user_id:5,
        country_id: countries[this.state.country], 
        content: this.state.description,
        media: this.state.img
    };
    console.log(post);
    console.log(this.state.img);
    console.log(post.media);

    

    postServices.create(post)
    .then(
        res => {
            console.log(res);
        }).catch(
            err => {
                console.log(err);     
            }
        )
  }

    render() {
        const { country } = this.state;
        return(
            <Container component="main" maxWidth = "sm">
    
            <form onSubmit={this.handleSubmit}> 
                <div className = "post">
    
                <h5>CREATE A NEW POST</h5>

                <input type="file" name="myImage" onChange= {this.onChange} />
                
                <h6>
                    CONTENT
                </h6>
                
                
                <div className= 'TextandCountry'>    
                    <textarea rows="50" cols = "50" type='text' id="description" onChange={this.handleChange}/>
                </div>
               
                <h6>
                    COUNTRY
                </h6>
                
                <div >     
                    <CountryDropdown className = "browser-default"
                    value={country}
                    onChange={(val) => this.selectCountry(val)} />              
                </div>
             
                
                <div className = "input-field">
                        <button className = "btn  blue darken-3 z-depth-0">Post</button>
                </div>
                      
             </div>
                        
             </form>
             
            
             </Container>
            );
    }
}

export default CreatePost
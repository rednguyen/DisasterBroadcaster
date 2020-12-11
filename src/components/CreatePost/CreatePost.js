import React, { Component, useState } from 'react';
import { CountryDropdown} from 'react-country-region-selector';
import Container from '@material-ui/core/Container';
import UserServices from "../../api-services/User"
import PostServices from "../../api-services/Post";
import { Redirect } from "react-router-dom";
import { countries } from "../../api-services/countries";

const postServices = new PostServices();
const userServices = new UserServices();

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            country: '',
            description: '',
            img: null,
            saved: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

onChange(e) {
    this.setState({img:e.target.files[0]});
}


selectCountry (val) {
        this.setState({ country: val });
      }

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
} 

componentDidMount() {
    const token_data = {
        "token": localStorage.getItem('token')
      }
      userServices.currentUser(token_data)
      .then(
        res => {
          console.log(res.data.id)
         const post = {
             user_id: res.data.id,
         }
         this.setState({username: post.user_id})
          console.log(this.state.username)
          })
    
}

handleSubmit = (e) => {
    
    e.preventDefault(this.state)

    let formData = new FormData();
    formData.append('user_id', this.state.username);
    formData.append('media',this.state.img,this.state.img.name);
    formData.append('content',this.state.description);
    formData.append('country_id',countries[this.state.country]);
    
    console.log(this.state)

    postServices.create(formData)
    .then(
        res => {
            console.log(res);
            this.setState({
              saved: true,
            })
        }).catch(
            err => {
                console.log(err);     
            }
        )
  }

    render() {
        if (this.state.saved) {
          return <Redirect to={"/profile"} />;
        }
        const { country } = this.state;
        return(
            <Container component="main" maxWidth = "sm">
    
            <form onSubmit={this.handleSubmit}> 
                <div className = "post">
    
                <h5>CREATE A NEW POST</h5>

                <input type="file" name="myImage" accept="image/png, image/jpeg" onChange= {this.onChange} />
                
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
                    <CountryDropdown className = "browser-default" id="country"
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

export default CreatePost;
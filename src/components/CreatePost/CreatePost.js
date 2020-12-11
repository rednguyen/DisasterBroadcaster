import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import UserServices from "../../api-services/User"
import PostServices from "../../api-services/Post";
import { Redirect } from "react-router-dom";
import countries from "../../components/Profile/countries";
import TextField from '@material-ui/core/TextField';
import Select from "react-select";

const postServices = new PostServices();
const userServices = new UserServices();

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state ={
            user_id: '',
            country_id: null,
            country_name: null,
            content: '',
            img: null,
            saved: false,
            img_uploaded: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onChange(e) {
        this.setState({ img: e.target.files[0], img_uploaded: URL.createObjectURL(e.target.files[0]) });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleCountryChange = (country_id) => {
      var index = countries.indexOf(country_id);
      this.setState({
        country_name: countries[index],
        country_id: country_id,
      });
    };

    componentDidMount() {
        const token_data = {
            "token": localStorage.getItem('token')
          }
          userServices.currentUser(token_data)
          .then(
            res => {
              console.log(res.data.id)
            this.setState({
              user_id: res.data.id,
              country_id: res.data.country_id,
              country_name: countries[res.data.country_id]
            })}
          )
     }

    handleSubmit = (e) => {
        
        e.preventDefault(this.state)

        let formData = new FormData();
        formData.append('user_id', this.state.user_id);
        if(this.state.img_uploaded !== null){
          formData.append("media", this.state.img, this.state.img.name)
        }
        formData.append('content',this.state.content);
        formData.append('country_id',this.state.country_id);
        
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
          return <Redirect to={"/viewmypost"} />;
        }

        return(
            <Container component="main" maxWidth = "sm">
    
            <form onSubmit={this.handleSubmit}> 
                <div className = "post">
    
                <h5>CREATE A NEW POST</h5>

                <h6>COUNTRY</h6>

                <div>
                <Select
                    name="country"
                    options={countries}
                    value={this.state.country_name}
                    onChange={(value) => this.handleCountryChange(value)}
                    defaultValue={{ label: "----------", value: "--" }}
                  />
                </div>

                <br></br>

                {this.state.img_uploaded !== null ? <img className="media-post" src={this.state.img_uploaded} alt=''/> : <img className="media-post" src={this.state.img} alt=''/>}

                <input type="file" name="myImage" accept="image/png, image/jpeg" onChange= {this.onChange} />
                
                <h6>CONTENT</h6>
                
                <div>    
                    <TextField
                      id="content"
                      multiline
                      onChange={this.handleChange}
                      rows={6}
                      fullWidth="true"
                      placeholder="Type your description of the post here"
                      variant="outlined"
                    />
                </div>
               
                <h6>COUNTRY</h6>
                
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
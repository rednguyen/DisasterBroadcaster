import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { CountryDropdown} from 'react-country-region-selector';
import Container from '@material-ui/core/Container';

const CreatePost = () => {
    const [User_id, setUsername] = useState('');
    const [Country_id, setCountry] = useState('');
    const [Content, setContent] = useState('');
    const [Media, setMedia] = useState('');
    const addPost = async() => {
        const result = await fetch(`https://disaster-broadcaster.herokuapp.com/api/disaster_broadcaster/post/`,{
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: User_id, text: Country_id, text: Content, Media}),
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)));
    }



    return(
        <Container component="main" maxWidth = "sm">

        <form onSubmit={() => addPost()}> 
            <div className = "post">

            <h5>CREATE A NEW POST</h5>
            <TextField
                value = {Media}
                type="file"
                onChange={(event) => setMedia(event.target.value)}
            />
            
            <div>
                Name
                <input type='text' value = {User_id} onChange={(event) => setUsername(event.target.value)} />
            </div>

            <h6>
                CONTENT
            </h6>
            
            
            <div className= 'TextandCountry'>     
                <textarea rows="50" cols = "50" value={Content} onChange={(event) => setContent(event.target.value)}/>
            </div>
           
            <h6>
                COUNTRY
            </h6>
            
            <div >     
                <CountryDropdown className = "browser-default"
                    value='US'
                    value = {Country_id}
                    onChange={(event) => setCountry(event.target.value)}/>     
            </div>
         
            
            <div className = "input-field">
                    <button className = "btn  blue darken-3 z-depth-0">Post</button>
            </div>
                  
         </div>
                    
         </form>
         
        
         </Container>
        );
}

export default CreatePost
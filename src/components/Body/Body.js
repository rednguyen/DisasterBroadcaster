import React from 'react';
import "./Body.css";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Button} from '../Button/Button';

const classes = {
    Paper:{padding: 20, marginTop: 10, marginBottom: 10}
}

function Body(posts, newss) {
    return (
        <div>
        <Grid container>
            {/* List of News */}
            <Grid item sm = {12}>
                <Paper style = {{padding: 10}}>
                    <h1 className = "col-bd1">Top Stories</h1>
                    {newss.map(news => 
                      <ul>
                        <a href={news.url} className = "a">
                        <p Paper style = {{padding: 20, fontSize: 20}}>
                        <li><img className = "media" src = {news.media} width="250px" height="250px"/></li>
                        <li>{news.content}</li>
                        </p>
                        </a>
                      </ul>
                    )} 
                </Paper>
            </Grid>
            
            {/* List of Posts */}
            <Grid item sm = "12">
                <Paper style = {{padding: 10}}>               
                    <h1 className = "col-bd2" style={{ color: 'rgb(32, 32, 32)' }}>Community</h1>
                <div className = "post">
                  {posts.map(post => 
                    <ul>
                      {/* <a href={BASE URL FOR SINGLE POST + "/post/" + post.id.toString()}  className="a"></a> */}
                      <p Paper style = {{padding: 20, fontSize: 20}}>
                      <li>{post.content}</li>
                      <li><img className = "media" src = {post.media} width="250px" height="250px"/></li>
                      <li>{post.user_id.username}</li>
                      <li><img className = "avatar" src = {post.user_id.avatar} width="50px" height="50px"/></li>
                      </p>
                    </ul>
                  )}    
                </div>      
                <Button className = "post" type="button"
                    onClick={(e) => {e.preventDefault();
                    window.location.href='/post';
                      }}> Make a Post 
                </Button> 
                </Paper>
            </Grid>
        </Grid>
        </div>
    )
    
}

export default Body
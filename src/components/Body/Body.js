import React from 'react';
import { Component } from "react";
import "./Body.css";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Button} from '../Button/Button';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    let newss = this.props.newss;
    let posts = this.props.posts;

    let newss_render = '';
    let posts_render = '';

    if(newss.length > 0){
      newss_render = <Grid item sm = {12}>
                      <Paper style = {{padding: 10}}>
                        <Link href="/allnews" variant="body2">
                          <h1 className = "col-bd1">NEWS</h1>
                        </Link>
                        <div>
                        {newss.map(news => 
                          <ul>
                            <a href={news.url} className = "a">
                            <p Paper style = {{padding: 20, fontSize: 20}}>
                            <h2 className="headline">{news.headline}</h2>
                            <li>{news.content}</li>
                            <li><img className = "newsImg" src = {news.media} width="340px" height="250px"/></li>
                            <div className="border"/>
                            </p>
                            </a>
                          </ul>
                        )}
                        </div>
                      </Paper>
                    </Grid>
    }

    if(posts.length > 0){
      posts_render = <Grid item sm = "12">
                      <Paper style = {{padding: 10}}>
                          <Link href="/allpost" variant="body2">
                            <h1 className = "col-bd2">Community</h1>
                          </Link>          
                          <div className = "post">
                            {posts.map(post => 
                              <ul>
                                <Link href={"/post/" + post.id.toString()} color="inherit" variant="body2">
                                <h3>{post.user_id.username}<span>&nbsp;</span><img className = "avatar" src = {post.user_id.avatar} width="40px" height="40px"/></h3>
                                <p Paper style = {{padding: 20, fontSize: 20}}>
                                <li>{post.content}</li>
                                <li><img className = "newsImg" src = {post.media} width="450px" height="325px"/></li>
                                </p>
                                </Link>
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
    }
    return(
      <div>
        <Grid container>
          {newss_render}
          {posts_render}
        </Grid>
        
      </div>
    )
  }
}

/* <Button className = "post" type="button"
//                 onClick={(e) => {e.preventDefault();
//                 window.location.href='/post';
//                   }}> Make a Post 
//             </Button> 
//             <Button
//               className="post"
//               type="button"
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.location.href = "/editpost";
//               }}
//             >
//               {" "}
//               Edit a Post
//             </Button> */

export default Body;
import React from 'react';
import { Component } from "react";
import "./Body.css";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PostServices from "../../api-services/Post";

import {FacebookShareButton, 
        TwitterShareButton, 
        EmailShareButton, 
        RedditShareButton, 
        FacebookIcon, 
        TwitterIcon, 
        EmailIcon, 
        RedditIcon}
from "react-share";

const postServices = new PostServices();

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handlePostDelete(post_id){
    postServices.destroy(post_id)
    .then((res) => {
      console.log(res.status);
      alert("Post delete successful!");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  makeDate(date) {
    return new Date(date);
  }

  render(){
    let newss = this.props.newss;
    let posts = this.props.posts;

    let newss_render = '';
    let posts_render = '';


    if(newss.length > 0){
      newss_render =  
      <Paper style = {{padding: 10}}>
                        <Link href="/allnews" variant="body2">
                          <h1 className = "col-bd1">NEWS</h1>
                        </Link>
                        <div>
                        {newss.map(news => 
                          <ul>
                            <div className='component'>
                            <a href={news.url} className = "a">
                            <p className="credential-post header-post">Country: {news.country_id.name}</p>
                            <div className="social">
                              <div style={{margin:"auto"}}>
                                  <FacebookShareButton 
                                    url={news.url}
                                    quote={news.headline}
                                    hashtag="#naturaldisasters"
                                    >
                                    <FacebookIcon size={45} />
                                  </FacebookShareButton>

                                  <TwitterShareButton 
                                    url={news.url}
                                    title={news.headline}
                                    hashtags={["#naturaldisasters"]}
                                    >
                                    <TwitterIcon size={45} />
                                  </TwitterShareButton>

                                  <RedditShareButton 
                                    url={news.url}
                                    title={news.headline}
                                    >
                                    <RedditIcon size={45} />
                                  </RedditShareButton>

                                  <EmailShareButton 
                                    url={news.url}
                                    subject = "Latest disaster"
                                    >
                                    <EmailIcon size={45} />
                                  </EmailShareButton>

                              </div>
                            </div>
                            <div className='thumb'><img className = "newsImg" src = {news.media} width="400px" height="270px" alt=''/></div>
                            <h4 className="headline">{news.headline}</h4>
                            {this.state.width <= 1620 ? <div className='news-text-small'>{news.content}</div> : <div className='news-text'>{news.content}</div>}     
                            </a>
                            </div>
                            
                          </ul>
                        )}
                        </div>
                        
                      </Paper>
    }

    if(posts.length > 0){
      let user = JSON.parse(localStorage.getItem('user'));
      let token = localStorage.getItem("token");
      posts_render = <Paper style = {{padding: 10}}>
                          <Link href="/allpost" variant="body2">
                            <h1 className = "col-bd2">Community</h1>
                          </Link>

                          <div className = "post">
                          {token !== null && token !== undefined ? <Button variant="contained" color="primary" href='/createpost' endIcon={<PublishIcon />}> Make a Post </Button> : ''}

                            {posts.map(post => 
                              <ul>
                                <div className='component'>
                                  <Link href={"/post/" + post.id.toString()} color="inherit" variant="body2" style={{ textDecoration:'none'}}>
                                  <div></div>
                                  <p className="credential-post header-post">
                                    <p style = {{fontSize: 20}}>{post.user_id.username}</p>
                                    <img src = {post.user_id.avatar} width="5%" height="5%" alt=''/>
                                    <p style = {{fontSize: 20}}>Country: {post.country_id.name}</p>
                                  </p>

                                  <li><p Paper style = {{fontSize: 20, padding:"5px"}}>{post.content}</p></li>
                                  
                                  <li><img className = "home-media-post" src = {post.media} alt=''/></li>
                                  </Link>
                                  <p>Posted on {this.makeDate(post.date_created).toDateString()}</p>

                                  <div>
                                    { user !== null && user.id === post.user_id.id ? <Button href={"/editpost/" + post.id} variant="contained" color="primary" endIcon={<EditIcon />}>
                                      Edit Post
                                    </Button>: ''}
                                  </div>
                                  <br></br>
                                  <div>
                                    { user !== null && user.id === post.user_id.id ?
                                    <Button variant="contained" color="secondary" onClick={() => this.handlePostDelete(post.id)} endIcon={<DeleteOutlineIcon />}>
                                      Delete Post
                                    </Button> : ''}
                                  </div>
                                </div>
                              </ul>
                            )}    
                          </div>      
                      </Paper>
    }
    return(
      <div>
        <Grid container spacing={3}>
          {this.state.width <= 1620 ? '': <Grid item xs></Grid>}
          {this.state.width <= 1620 ? <Grid item xs={12}>{newss_render}</Grid>: <Grid item xs={6}>{newss_render}</Grid>} 
          {this.state.width <= 1620 ? '': <Grid item xs></Grid>} 
        </Grid>

        <Grid container spacing={3}>
          {this.state.width <= 1620 ? '': <Grid item xs></Grid>}
          {this.state.width <= 1620 ? <Grid item xs={12}>{posts_render}</Grid>: <Grid item xs={6}>{posts_render}</Grid>} 
          {this.state.width <= 1620 ? '': <Grid item xs></Grid>} 
        </Grid>
      </div>
    )
  }
}

export default Body;
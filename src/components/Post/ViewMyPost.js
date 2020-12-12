import React, { Component } from 'react';
import "./postBody.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import PublishIcon from '@material-ui/icons/Publish';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PostServices from "../../api-services/Post";

const postServices = new PostServices();

class ViewMyPost extends Component {
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
    .atach((err) => {
      console.log(err);
    })
  }

  makeDate(date) {
    return new Date(date);
  }

  render(){
    let posts = this.props.posts;
    let posts_render = '';

    if(posts.length > 0){
      posts_render = <Grid item sm = "12">
                          <div className = "post">
                          <h3>My Posts</h3>
                          <Button variant="contained" color="primary" href='/createpost' endIcon={<PublishIcon />}>
                            Make a Post 
                          </Button>
                            {posts.map(post => 
                              <ul>
                                <div className="component">
                                <Link href={"/post/" + post.id.toString()} color="inherit" variant="body2" style={{ textDecoration:'none'}}>
                                  <p className="credential-post header-post">Country: {post.country_id.name}</p>
                                  <li><img className="media-post" src = {post.media} alt=""/></li>
                                  <li><p style= {{fontSize: 35}}>{post.content}</p></li>
                                </Link>
                                <p>Posted on {this.makeDate(post.date_created).toDateString()}</p>
                                <div>
                                <Button href={"/editpost/" + post.id} variant="contained" color="primary" endIcon={<EditIcon />}>
                                  Edit Post
                                </Button>
                                </div>
                                <br></br>
                                <div>
                                  <Button variant="contained" color="secondary" onClick={() => this.handlePostDelete(post.id)} endIcon={<DeleteOutlineIcon />}>
                                    Delete Post
                                  </Button>
                                </div>
                                </div>     
                              </ul>
                            )}    
                          </div>      
                      </Grid>
    } else {
      posts_render =<h2>{'No posts here yet.'}</h2>
    }

    return(
      <div>
        <Grid container spacing={3}>
          {this.state.width <= 1620 ? '': <Grid item xs></Grid>}
          {this.state.width <= 1620 ? <Grid item xs={12}>{posts_render}</Grid>: <Grid item xs={6}>{posts_render}</Grid>} 
          {this.state.width <= 1620 ? '': <Grid item xs></Grid>} 
        </Grid>
      </div>
    );
  }
    
}

export default ViewMyPost;

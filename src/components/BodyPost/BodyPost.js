import React, { userState } from 'react';
import "./BodyPost.css";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Button} from '../Button/Button';
import { Component } from 'react';
import CommentServices from "../../api-services/Comment";
import UserServices from "../../api-services/User";

const commentServices = new CommentServices();
const userServices = new UserServices();

class Post extends Component {
  state ={
    comment:'',
    reaction: '',
    user_id: ''

  }

  // setComments(comments) {
  //   const [comments, setComments] = useState([]);
  //   function addComment(e) {
  //     const comment = e.target.value;
  //     console.log(comment);
  //     setComments(comments => [...comments, comment]);
  //   }
  // }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  } 
  handleSubmit = (e) => {
    e.preventDefault(this.state)

    userServices.currentUser()
    .then(
      res => {
        const user_id = res.data.id;
        this.setState({
          user_id: user_id,
        })
    })
    const reaction = this.state.reaction;
    const comment ={
      user_id: this.state.user_id,
      post_id: this.props.post.id,
      comment: this.state.comment
    }

    console.log(comment);

    commentServices.create(comment)
    .then(
        res => {
          console.log(res);
    }).catch(
        err => {
          console.log(err);     
    })

    window.location.reload();
  } 

  makeDate(date) {
    return new Date(date);
  }
  
  render(){
    // this.setComments(this.props.post.comments);
    const post = this.props.post;
    var d = this.makeDate(post.date_created);
    return (
      <div>
      <Grid container>
        <Grid item sm = {12}>
            <Paper style = {{padding: 10}}>
            <img className="header-post" src={post.user_id.avatar} width="50px" height="50px"/>
            <p className="credential-post header-post">Posted by {post.user_id.username} on {d.toDateString()}</p>
            <div className="single-post">
                <img className="media-post" src={post.media}/>
                <p className="content-post">{post.content}</p>
            </div>
            
            </Paper>
            
        </Grid>
        <Grid item sm = {12}>
          <Paper style = {{padding: 10}}>
            <div>
              <div className="comment-header">
                Community Comments and Reactions 
              </div>

              <div className="comment-box">
                <form onSubmit={this.handleSubmit}>
                  <div>
                      <label>
                        Type your comment here
                        {/* <textarea name="comment" rows="10" cols="30" onChange={this.handleChange}></textarea> */}
                        <input type="text" id="comment" onChange={this.handleChange}/>
                      </label>
                      <div>
                          <button className = "btn  blue darken-3 z-depth-0">Submit</button>
                      </div>
                  </div>
    
                </form>
              </div>
              
              <div>
                {post.comments.map(comment => 
                  <ul>
                    <p Paper style = {{padding: 20, fontSize: 10}}>
                    <li><img src = {comment.avatar} width="50" height="50px"/></li>
                    <p>{comment.comment}</p>
                    <p>Posted by {comment.username} on {this.makeDate(comment.date_created).toDateString()}</p>
                    </p>
                  </ul>
                )}    
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      </div>
    )
  }

}






export default Post
import React from 'react';
import "./BodyPost.css";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import { Component } from 'react';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import PostServices from "../../api-services/Post";
import CommentServices from "../../api-services/Comment";
import UserServices from "../../api-services/User";
import ReactionServices from "../../api-services/Reaction";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const postServices = new PostServices();
const commentServices = new CommentServices();
const userServices = new UserServices();
const reactionServices = new ReactionServices();

class Post extends Component {
  state ={
    content:'',
    reaction: '',
    user_id: '',
    comment: {},
    comments: [],
    like_count: 0,
    love_count: 0,
    sad_count: 0,
    reaction_id: '',
    comment_id: '',
    comment_edit: false,
    comment_content: null
  }

  componentDidMount() {
    const token_data = {
      "token": localStorage.getItem('token')
    }
    userServices.currentUser(token_data)
    .then(
      res => {
        this.setState({
          user_id: res.data.id
        })
    })
    this.setState({
      comments: this.props.post.comments,
      like_count: this.props.post.like_count,
      love_count: this.props.post.love_count,
      sad_count: this.props.post.sad_count
    })
  }

  postComment(){
    const comment ={
      user_id: this.state.user_id,
      post_id: this.props.post.id,
      comment: this.state.content
    }

    commentServices.create(comment)
    .then(
        res => {
          var t = new Date()
          if(res.status !== 201){
            throw new Error(res.status)
          }
          this.setState({
            comment: {
              id: res.data.id,
              user_id: res.data.user_id,
              username: this.state.comment.username,
              avatar: this.state.comment.avatar,
              comment: this.state.comment.comment,
              date_created: t.toDateString()
          }
          })
          this.setState({
            comments:[this.state.comment, ...this.state.comments],
            content:''
          });
    }).catch(
        err => {
          console.log(err);     
    })
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(this.state)
    let current_user = JSON.parse(localStorage.getItem('user'));
    if(current_user === null){
      alert("Please login to post a comment!");
      return;
    }
    const token_data = {
      "token": localStorage.getItem('token')
    }
    userServices.currentUser(token_data)
    .then(
      res => {
        var t = new Date()
        const new_comment = {
          user_id: res.data.id,
          username: res.data.username,
          avatar: res.data.avatar,
          comment: this.state.content,
          date_created: t.toDateString()
        }
        this.setState({
          comment: new_comment,
          user_id: res.data.id
        })
        this.postComment();
    })
  }

  handlePostDelete(post_id){
    postServices.destroy(post_id)
    .then((res) => {
      console.log(res.status);
      alert("Post delete successful!");
      this.props.history.push('/');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleCommentDelete(comment_id){
    commentServices.destroy(comment_id)
    .then((res) => {
      console.log(res.status);
      alert("Comment delete successful!");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleEdittingComment(comment_id){
    this.setState({comment_edit: true, comment_id: comment_id})
  }

  handleCommentEdit = (e) => {
    const comment_patch = {
      comment: this.state.comment_content
    }
    console.log(this.state.comment_id);
    commentServices.partial_update(this.state.comment_id, comment_patch)
    .then((res) => {
      alert("Comment update successful!");
      this.setState({
        comment_id: '',
        comment_edit: false,
        comment_content: null
      })
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  makeReaction(type){
    const reaction = {
      user_id: this.state.user_id,
      post_id: this.props.post.id,
      reaction: type
    }

    reactionServices.create(reaction)
    .then(
      res => {
        this.setState({
          reaction_id: res.data.id,
        })
      }).catch(
        err => {
          console.log(err);     
    })
  }  

  handleClickLike = (e) => {
    this.makeReaction('1'); 
    this.setState(prevState => {
      return {like_count: prevState.like_count + 1}
    })

  }

  handleClickSad = (e) => {
    this.makeReaction('2'); 
    this.setState(prevState => {
      return {sad_count: prevState.sad_count + 1}
    })
  }

  handleClickLove = (e) => {
    this.makeReaction('3'); 
    this.setState(prevState => {
      return {love_count: prevState.love_count + 1}
    })
  }

  makeDate(date) {
    return new Date(date);
  }
  
  render(){
    const post = this.props.post;
    var d = this.makeDate(post.date_created);
    var user = JSON.parse(localStorage.getItem('user'));
    return (
      <div>
      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={6}>
            <Paper style = {{padding: 10}}>
            <img className="header-post" src={post.user_id.avatar} alt="" width="50px" height="50px"/>
            <p className="credential-post header-post">Posted by {post.user_id.username} on {d.toDateString()}</p>
            <p className="credential-post header-post">Country: {post.country_id.name}</p>

            { user !== null ? 
            <div className="credential-post header-post">
            <IconButton onClick={this.handleClickLike}>
              {this.state.like_count}
              <ThumbUpOutlinedIcon style = {{margin: 10, color: "black"}} color="primary" fontSize="large"/>
            </IconButton>
            <IconButton onClick={this.handleClickLove}>
              {this.state.love_count}
              <FavoriteBorderIcon style = {{margin: 10, color: "black"}} color="primary" fontSize="large"/>
            </IconButton>
            <IconButton onClick={this.handleClickSad}>
              {this.state.sad_count}
              <SentimentVeryDissatisfiedIcon style = {{margin: 10, color: "black"}} color="primary" fontSize="large"/>
            </IconButton>
            </div>
            :
            <div className="credential-post header-post">
            
            <IconButton onClick={this.handleClickLike} disabled="true">
              {this.state.like_count}
              <ThumbUpOutlinedIcon style = {{margin: 10, color: "black"}} color="primary" fontSize="large"/>
            </IconButton>
            <IconButton onClick={this.handleClickLove} disabled="true">
              {this.state.love_count}
              <FavoriteBorderIcon style = {{margin: 10, color: "black"}} color="primary" fontSize="large"/>
            </IconButton>
            <IconButton onClick={this.handleClickSad} disabled="true">
              {this.state.sad_count}
              <SentimentVeryDissatisfiedIcon style = {{margin: 10, color: "black"}} color="primary" fontSize="large"/>
            </IconButton>
            <p style={{fontSize:"15px", color:"red"}}>Please login to make a reaction</p>
            </div>}
            
            <div className="editButton">
              { user !== null && user.id === post.user_id.id ? <Button href={"/editpost/" + post.id} variant="contained" color="primary" endIcon={<EditIcon />}>
                Edit Post
              </Button>: ''}
            </div>
            <div className="editButton">
              { user !== null && user.id === post.user_id.id ?
              <Button variant="contained" color="secondary" onClick={() => this.handlePostDelete(post.id)} endIcon={<DeleteOutlineIcon />}>
                Delete Post
              </Button> : ''}
            </div>
            <div className="single-post">
                <img className="media-post" src={post.media} alt=""/>
                <p className="content-post">{post.content}</p>
            </div>
            
            </Paper>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
          <Grid item xs>
          </Grid>
          <Grid item xs={6}>
          <Paper style = {{padding: 10}}>
            <div text-align='center'>

              <div className="comment-header">
                Community Comments and Reactions 
              </div>

              <div className="comment-box">
                <form onSubmit={this.handleSubmit}>
                  <div>
                      <label>
                        <input type="text" id="content" onChange={this.handleChange} value={this.state.content} placeholder="Type your comment here"/>
                      </label>
                      <div>
                          <button className = "btn  blue darken-3 z-depth-0">Submit</button>
                      </div>
                  </div>
                </form>
              </div>

              <div className="comment-section">
                {this.state.comments.map(comment => 
                  <ul>
                    <div className="component">
                    <p Paper style = {{padding: 20, fontSize: 10}}>
                    <li><img src = {comment.avatar} alt="" width="50" height="50px"/></li>

                    {this.state.comment_edit && comment.id === this.state.comment_id ?
                    <div>
                    <form onSubmit={this.handleCommentEdit}>
                      <TextField
                      id="comment_content"
                      multiline
                      onChange={this.handleChange}
                      rows={6}
                      fullWidth="true"
                      defaultValue={comment.comment}
                      variant="outlined"/>
                      <button className = "btn  blue darken-3 z-depth-0">Submit</button>
                    </form>
                    </div>
                    :<p className="post-description">{comment.comment}</p>}


                    <p className="posted-by">Posted by {comment.username} on {this.makeDate(comment.date_created).toDateString()}</p>
                    
                    </p>
                    <div>
                      { user !== null && user.id === comment.user_id && this.state.comment_edit === false ? 
                        <Button variant="contained" color="primary" onClick={() => this.handleEdittingComment(comment.id)} endIcon={<EditIcon />}>
                          Edit Comment
                        </Button> : ''}
                    </div>
                    <br></br>
                    <div>
                      { user !== null && user.id === comment.user_id && this.state.comment_edit === false ? 
                      <Button variant="contained" color="secondary" onClick={() => this.handleCommentDelete(comment.id)} endIcon={<DeleteOutlineIcon />}>
                        Delete Comment
                      </Button> : ''}
                    </div>

                    </div>
                  </ul>
                )}    
              </div>
            </div>
          </Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
      
      </div>
    )
  }

}






export default Post
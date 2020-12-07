import React, { userState } from "react";
import "./BodyPost.css";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button } from "../Button/Button";
import { IconButton } from "@material-ui/core";
import { Component } from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import CommentServices from "../../api-services/Comment";
import UserServices from "../../api-services/User";
import ReactionServices from "../../api-services/Reaction";

const commentServices = new CommentServices();
const userServices = new UserServices();
const reactionServices = new ReactionServices();

class Post extends Component {
  state = {
    content: "",
    reaction: "",
    user_id: "",
    comment: {},
    comments: [],
    like_count: 0,
    love_count: 0,
    sad_count: 0,
    reaction_id: "",
  };

  componentDidMount() {
    const token_data = {
      token: localStorage.getItem("token"),
    };
    userServices.currentUser(token_data).then((res) => {
      this.setState({
        user_id: res.data.id,
      });
    });
    this.setState({
      comments: this.props.post.comments,
      like_count: this.props.post.like_count,
      love_count: this.props.post.love_count,
      sad_count: this.props.post.sad_count,
    });
  }

  postComment() {
    const comment = {
      user_id: this.state.user_id,
      post_id: this.props.post.id,
      comment: this.state.content,
    };

    commentServices
      .create(comment)
      .then((res) => {
        console.log(res);
        if (res.status !== 201) {
          throw new Error(res.status);
        }
        this.setState({
          comments: [this.state.comment, ...this.state.comments],
          content: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault(this.state);
    const token_data = {
      token: localStorage.getItem("token"),
    };
    userServices.currentUser(token_data).then((res) => {
      console.log(res.data);
      var t = new Date();
      const new_comment = {
        user_id: res.data.id,
        username: res.data.username,
        avatar: res.data.avatar,
        comment: this.state.content,
        date_created: t.toDateString(),
      };
      this.setState({
        comment: new_comment,
        user_id: res.data.id,
      });
      this.postComment();
    });
  };

  makeReaction(type) {
    const reaction = {
      user_id: this.state.user_id,
      post_id: this.props.post.id,
      reaction: type,
    };

    reactionServices
      .create(reaction)
      .then((res) => {
        console.log(res.data);
        this.setState({
          reaction_id: res.data.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClickLike = (e) => {
    this.makeReaction("1");
    this.setState((prevState) => {
      return { like_count: prevState.like_count + 1 };
    });
  };

  handleClickSad = (e) => {
    this.makeReaction("2");
    this.setState((prevState) => {
      return { sad_count: prevState.sad_count + 1 };
    });
  };

  handleClickLove = (e) => {
    this.makeReaction("3");
    this.setState((prevState) => {
      return { love_count: prevState.love_count + 1 };
    });
  };

  makeDate(date) {
    return new Date(date);
  }

  render() {
    const post = this.props.post;
    var d = this.makeDate(post.date_created);
    return (
      <div>
        <Grid container>
          <Grid item sm={12}>
            <Paper style={{ padding: 10 }}>
              <img
                className="header-post"
                src={post.user_id.avatar}
                alt=""
                width="50px"
                height="50px"
              />
              <p className="credential-post header-post">
                Posted by {post.user_id.username} on {d.toDateString()}
              </p>
              <div className="credential-post header-post">
                <IconButton onClick={this.handleClickLike}>
                  {this.state.like_count}
                  <ThumbUpOutlinedIcon
                    style={{ margin: 10, color: "black" }}
                    color="primary"
                    fontSize="large"
                  />
                </IconButton>
                <IconButton onClick={this.handleClickLove}>
                  {this.state.love_count}
                  <FavoriteBorderIcon
                    style={{ margin: 10, color: "black" }}
                    color="primary"
                    fontSize="large"
                  />
                </IconButton>
                <IconButton onClick={this.handleClickSad}>
                  {this.state.sad_count}
                  <SentimentVeryDissatisfiedIcon
                    style={{ margin: 10, color: "black" }}
                    color="primary"
                    fontSize="large"
                  />
                </IconButton>
              </div>
              <div className="single-post">
                <img className="media-post" src={post.media} alt="" />
                <p className="content-post">{post.content}</p>
              </div>
            </Paper>
          </Grid>
          <Grid item sm={12}>
            <Paper style={{ padding: 10 }}>
              <div>
                <div className="comment-header">
                  Community Comments and Reactions
                </div>

                <div className="comment-box">
                  <form onSubmit={this.handleSubmit}>
                    <div>
                      <label>
                        <input
                          type="text"
                          id="content"
                          onChange={this.handleChange}
                          value={this.state.content}
                          placeholder="Type your comment here"
                        />
                      </label>
                      <div>
                        <button className="btn  blue darken-3 z-depth-0">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div>
                  {this.state.comments.map((comment) => (
                    <ul>
                      <p Paper style={{ padding: 20, fontSize: 10 }}>
                        <li>
                          <img
                            src={comment.avatar}
                            alt=""
                            width="50"
                            height="50px"
                          />
                        </li>
                        <p>{comment.comment}</p>
                        <p>
                          Posted by {comment.username} on{" "}
                          {this.makeDate(comment.date_created).toDateString()}
                        </p>
                      </p>
                    </ul>
                  ))}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Post;

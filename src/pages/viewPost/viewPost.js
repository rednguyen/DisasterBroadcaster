import React, { Component } from 'react';
import ViewMyPost from '../../components/Post/ViewMyPost';
import './viewPost.css';
import PostServices from "../../api-services/Post";

class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state ={
      posts: []
    };
  }

  componentDidMount() {
    let postServices = new PostServices();
    const token_data = {
      "token": localStorage.getItem('token')
    }
    postServices.getUserPosts(token_data)
    .then(
      res => {this.setState({posts: res.data})})
  }

  render(){
    return(
      <div className="body">
        <div className="Body"><ViewMyPost posts={this.state.posts} {...this.props}/></div>
      </div>
    )
  }

}

export default ViewPost;
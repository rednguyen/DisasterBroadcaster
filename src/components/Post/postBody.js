import React, { Component, useState } from 'react';
import "./postBody.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
/* Image */
import PostServices from "../../api-services/ApiServices";
const postServices = new PostServices();

  function mapPost(props) {
   return(
     <div>
        <h3>  {props.id} Post</h3>
           <div className = "posts">
               <img className="post-img" src = {props.media} alt="Image"></img>
               <p className = "info">{props.content}</p>
               <Button className = "Button" variant="outlined" size="medium" color="primary" >
         Edit Post
       </Button>
           </div>
     </div>
   )
  }
class PostBody extends Component {
  constructor(props) {
    super(props);
    this.state ={
        id: '',
        content: '',
        img: null,
    };
    const UserPost = postServices.retrieve(1)
    .then(
      res => {
          let responseJSON = res; 
          sessionStorage.getItem('data', responseJSON)   
          console.log(res.data);
          //PostArray.append(Post)
          //console.log(Post.content)
          this.setState({
            id: res.data.user_id.username,
            content: res.data.content
        })
      }).catch(
          err => {
              console.log(err.message);     
          }
      )
}
render(){
  console.log(this.state.content);
  return(
    <div>
      {mapPost(this.state)}
    </div>
 );
}
    
}


export default PostBody;
/* <div>
<h1> View My Post</h1>
<div className = "posts">
    <img className="post-img" src = {SUN_IMG} alt="SUNPOST"></img>
    <h2>Title 1</h2>
    <p className = "info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <Button className = "Button" variant="outlined" size="medium" color="primary" >
Edit Post
</Button>
</div>
<div className = "posts">
    <img className="post-img" src = {WIND_IMG} alt="WINDPOST"></img>
    <h2>Title 2</h2>
    <p className = "info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <Button className = "Button" variant="outlined" size="medium" color="primary" >
Edit Post
</Button>
</div>
<div className = "posts">
    <img className="post-img" src = {HUR_IMG} alt="HURICANE POST"></img>
    <h2>Title 3</h2>
    <p className = "info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <Button className = "Button" variant="outlined" size="medium" color="primary" >
Edit Post
</Button>
</div>
</div> */
import React from 'react';
import "./postBody.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
/* Image */
import HUR_IMG from './Icons/025-tornado.png';
import WIND_IMG from './Icons/033-wind.png';
import SUN_IMG from './Icons/028-sun.png';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  
const postBody = () => {
    return(
       <div>
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
       </div>
    )
}

export default postBody;
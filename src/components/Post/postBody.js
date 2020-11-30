import React from 'react';
import "./postBody.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
/* Image */
import postInfo from './userPost';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    roots: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridList: {
        width: 500,
        height: 450,
      }
  });
function CreateCard(post){
    const classes = useStyles();
    return(
        <Card className={classes.root} >
       <CardActionArea>
         <CardMedia
          className={classes.media}
          image={post.imageURL}
          src = {post.imageURL}
          title={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          View Post
        </Button>
      </CardActions>
    </Card>
    );

}
export default function PostBody() {
    const classes = useStyles();

  return (
      <div>
          <h1> View My Post</h1>
          <Grid container className = {classes.roots} spacing={5}>
              <Grid item xs = {12} spacing={5}>
                  <Grid container spacing = {3} justify = "flex-start" alignItems="center">
                  {postInfo.map(CreateCard)}
                  </Grid>
              </Grid>
          </Grid>
          
      </div>
    
  );
    // return(
    //    <div>
    //         <h1> View My Post</h1>
    //         <div className = "posts">
    //             <img className="post-img" src = {SUN_IMG} alt="SUNPOST"></img>
    //             <h2>Title 1</h2>
    //             <p className = "info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    //             <Button className = "Button" variant="outlined" size="medium" color="primary" >
    //       Edit Post
    //     </Button>
    //         </div>
    //         <div className = "posts">
    //             <img className="post-img" src = {WIND_IMG} alt="WINDPOST"></img>
    //             <h2>Title 2</h2>
    //             <p className = "info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    //             <Button className = "Button" variant="outlined" size="medium" color="primary" >
    //       Edit Post
    //     </Button>
    //         </div>
    //         <div className = "posts">
    //             <img className="post-img" src = {HUR_IMG} alt="HURICANE POST"></img>
    //             <h2>Title 3</h2>
    //             <p className = "info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    //             <Button className = "Button" variant="outlined" size="medium" color="primary" >
    //       Edit Post
    //     </Button>
    //         </div>
    //    </div>
    // )
    
}
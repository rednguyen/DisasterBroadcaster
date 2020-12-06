import React from 'react';
import "./Body.css";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Button} from '../Button/Button';

function Body(posts, newss) {
    if (posts.length > 0 && newss.length > 0){
      return (
        <div>
        <Grid container>
            {/* List of News */}
            <Grid item sm = {12}>
                <Paper style = {{padding: 10}}>
                  <Link href="/allnews" variant="body2">
                    <h1 className = "col-bd1">Top Stories</h1>
                  </Link>
                  <div>
                  {newss.map(news => 
                    <ul>
                      <a href={news.url} className = "a">
                      <p Paper style = {{padding: 20, fontSize: 20}}>
                      <li><img className = "media" src = {news.media} width="250px" height="250px"/></li>
                      <li>{news.content}</li>
                      </p>
                      </a>
                    </ul>
                  )}
                  </div>
                </Paper>
            </Grid>
            
            {/* List of Posts */}
            <Grid item sm = "12">
                <Paper style = {{padding: 10}}>
                    <Link href="/allpost" variant="body2">
                      <h1 className = "col-bd2">Community</h1>
                    </Link>          
                    <div className = "post">
                      {posts.map(post => 
                        <ul>
                          {/* <a href={BASE URL FOR SINGLE POST + "/post/" + post.id.toString()}  className="a"></a> */}
                          <p Paper style = {{padding: 20, fontSize: 20}}>
                          <li>{post.content}</li>
                          <li><img className = "media" src = {post.media} width="250px" height="250px"/></li>
                          <li>{post.user_id.username}</li>
                          <li><img className = "avatar" src = {post.user_id.avatar} width="50px" height="50px"/></li>
                          </p>
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
        </Grid>
        </div>
      )
    } else if (newss.length > 0) {
      return (
        <div>
        <Grid container>
          {/* List of News */}
          <Grid item sm = {12}>
              <Paper style = {{padding: 10}}>
                  <h1 className = "col-bd1">All Stories</h1>
                  {newss.map(news => 
                    <ul>
                      <a href={news.url} className = "a">
                      <p Paper style = {{padding: 20, fontSize: 20}}>
                      <li><img className = "media" src = {news.media} width="250px" height="250px"/></li>
                      <li>{news.content}</li>
                      </p>
                      </a>
                    </ul>
                  )} 
              </Paper>
          </Grid>
        </Grid>
        </div>
      )
    } else if (posts.length > 0) {
        return (
          <div>
          <Grid item sm = "12">
            <Paper style = {{padding: 10}}>               
                <h1 className = "col-bd2">Community</h1>
            <div className = "post">
              {posts.map(post => 
                <ul>
                  {/* <a href={BASE URL FOR SINGLE POST + "/post/" + post.id.toString()}  className="a"></a> */}
                  <p Paper style = {{padding: 20, fontSize: 20}}>
                  <li>{post.content}</li>
                  <li><img className = "media" src = {post.media} width="250px" height="250px"/></li>
                  <li>{post.user_id.username}</li>
                  <li><img className = "avatar" src = {post.user_id.avatar} width="50px" height="50px"/></li>
                  </p>
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
          </div>
        )
    }

}

export default Body
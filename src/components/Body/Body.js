import React from 'react';
import "./Body.css";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Button} from '../Button/Button';
// const  token = localStorage.getItem('token')

function Body(posts, newss) {
  const  token = localStorage.getItem('token')
  if (posts.length > 0 && newss.length > 0 && token !== null){
    return (
      <div>
          {/* List of News */}
        <Grid container>
          <Grid item sm = {12}>
              <Paper style = {{padding: 10}}>
                <Link href="/allnews" variant="body2">
                  <h1 className = "col-bd1">NEWS</h1>
                </Link>
                <div>
                {console.log(newss[1])}
                {newss.map(news => 
                  <ul>
                    <a href={news.url} className = "a">
                    <p Paper style = {{padding: 20, fontSize: 20}}>
                    
                    <h2 className="headline">{news.headline}</h2>
                    <li>{news.content}</li>
                    <li><img className = "newsImg" src = {news.media} width="340px" height="250px"/></li>
                    <div className="border"/>
                    
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
                        <Link href={"/post/" + post.id.toString()} color="inherit" variant="body2">
                        <h3>{post.user_id.username}<span>&nbsp;</span><img className = "avatar" src = {post.user_id.avatar} width="40px" height="40px"/></h3>
                        <p Paper style = {{padding: 20, fontSize: 20}}>
                        <li>{post.content}</li>
                        <li><img className = "newsImg" src = {post.media} width="450px" height="325px"/></li>
                        </p>
                        </Link>
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
  } else if (posts.length > 0 && newss.length > 0){
      return (
        <div>
        
            {/* List of News */}
          <Grid container>
            <Grid item sm = {12}>
                <Paper style = {{padding: 10}}>
                  <Link href="/allnews" variant="body2">
                    <h1 className = "col-bd1">NEWS</h1>
                  </Link>
                  <div>
                  {console.log(newss[1])}
                  {newss.map(news => 
                    <ul>
                      <a href={news.url} className = "a">
                      <p Paper style = {{padding: 20, fontSize: 20}}>
                      
                      <h2 className="headline">{news.headline}</h2>
                      <li>{news.content}</li>
                      <li><img className = "newsImg" src = {news.media} width="340px" height="250px"/></li>
                      <div className="border"/>
                      
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
                          <Link href={"/post/" + post.id.toString()} color="inherit" variant="body2">
                          <h3>{post.user_id.username}<span>&nbsp;</span><img className = "avatar" src = {post.user_id.avatar} width="40px" height="40px"/></h3>
                          <p Paper style = {{padding: 20, fontSize: 20}}>
                          <li>{post.content}</li>
                          <li><img className = "newsImg" src = {post.media} width="450px" height="325px"/></li>
                          </p>
                          </Link>
                        </ul>
                      )}    
                    </div>      
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
                      <li><img className = "media" src = {news.media} alt="" width="250px" height="250px"/></li>
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
                  <Link href={"/post/" + post.id.toString()} color="inherit" variant="body2">
                  <p Paper style = {{padding: 20, fontSize: 20}}>
                  <li>{post.content}</li>
                  <li><img className = "media" src = {post.media} alt="" width="250px" height="250px"/></li>
                  <li>{post.user_id.username}</li>
                  <li><img className = "avatar" src = {post.user_id.avatar} alt="" width="50px" height="50px"/></li>
                  </p>
                  </Link>
                </ul>
              )}    
            </div>

            {/* <Button className = "post" type="button"
                onClick={(e) => {e.preventDefault();
                window.location.href='/post';
                  }}> Make a Post 
            </Button> 
            <Button
              className="post"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/editpost";
              }}
            >
              {" "}
              Edit a Post
            </Button> */}
            </Paper>
          </Grid>
          </div>
        )
    }

}

export default Body
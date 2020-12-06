import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PostBody from '../../components/Post/postBody';
import Footer from '../../components/Footer/Container/FooterContainer';
import './viewPost.css';



const viewPost = ()=> {
    return(
        <div className="Wrapper">
        <div className="TopPage"><NavBar /></div>
        <div className="Body"><PostBody /></div>
        <div class = "BottomPage"><Footer /></div>
      </div>
    )
}

export default viewPost;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import AboutHeader from './AboutHeader';
import "./AboutBody.css";

const AboutBody = () => {
    return(
        <div className="about-wrapper">
            <AboutHeader/>
            <Grid container justify="center">
                <Grid item xs={10}>
                <h1 className="question-title">What?</h1>
                <h2 id="what-desc">A news platform that shares updates on natural disasters across the world.</h2>
                </Grid> 
            </Grid>

            <div className="breakline"></div>
            <div className="rectangle"></div>
            <div className="breakline"></div>

            <Grid container justify="center">
                <Grid item xs={10}>
                <h1 className="question-title">Why?</h1>
                <p id="description">When disaster strikes, information is key. News stations are cluttered with information 
                    of all fields. Being able to keep people up-to-date with real time news focusing on natural disasters can
                    help people stay informed and act quickly and safely. Our mission is to educate the public on recent natural disasters
                    and get real-time news of recent and ongoing natural disasters</p>
                </Grid> 
            </Grid>
        </div>
    );
}

export default AboutBody
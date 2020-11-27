import React from 'react';
import "./GuideBody.css";
import Grid from '@material-ui/core/Grid';
import GuideHeader from './GuideHeader';

// Images
import EQ_IMG from "./Icons/005-earthquake.png";
import FL_IMG from "./Icons/007-flood.png";
import HU_IMG from "./Icons/012-hurricane.png";
import VL_IMG from "./Icons/030-volcano.png";
import TR_IMG from "./Icons/025-tornado.png";
import WF_IMG from "./Icons/006-burning.png";

const GuideBody = () => {
    return(
        <div className="guide-content">
            <GuideHeader/>
            <Grid container spacing={1} justify="space-between" direction="column">
                <Grid container spacing={10} item xs={12} justify="space-evenly" alignItems="center">
                    <div className="col-guide">
                        <a href="/earthquake">
                            <img className = "imgClass" src={EQ_IMG} alt="Earthquake"/>
                        </a>
                        <p className = "Pg"> Earthquake </p>
                    </div>


                    <div className="col-guide">
                        <a href="/flood">
                            <img className = "imgClass" src={FL_IMG} alt="Flood"/>
                        </a>
                        <p className = "Pg"> Flood </p>
                    </div>

                    <div className="col-guide">
                        <a href="/hurricane">
                            <img className = "imgClass" src={HU_IMG} alt="Hurricane"/>
                        </a>
                        <p className = "Pg"> Hurricane </p>
                    </div>
                    </Grid>
                
                <Grid container spacing={10} item xs={12} justify="space-evenly" alignItems="center">
                    <div className="col-guide">
                        <a href="/volcano">
                            <img className = "imgClass" src={VL_IMG} alt="Volcano"/>
                        </a>
                        <p className = "Pg"> Volcano </p>
                    </div>

                        
                    <div className="col-guide">
                        <a href="/tornado">
                            <img className = "imgClass" src={TR_IMG} alt="Tornado"/>
                        </a>
                        <p className = "Pg"> Tornado </p>
                    </div>

                    <div className="col-guide">
                        <a href="/wildfire">
                            <img className = "imgClass" src={WF_IMG} alt="Wildfire"/>
                        </a>
                        <p className = "Pg"> Wildfire </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default GuideBody
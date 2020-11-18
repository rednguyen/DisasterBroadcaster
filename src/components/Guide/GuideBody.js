import React from 'react';
import "./GuideBody.css";
import Grid from '@material-ui/core/Grid';
// Images
import EQ_IMG from "./Icons/005-earthquake.png";
import FL_IMG from "./Icons/007-flood.png";
import HU_IMG from "./Icons/012-hurricane.png";
import VL_IMG from "./Icons/030-volcano.png";
import TR_IMG from "./Icons/025-tornado.png";
import WF_IMG from "./Icons/006-burning.png";

const GuideBody = () => {
    return(
        <div className="Wrapper">
            <Grid container spacing={1} justify="space-between" direction="column">
                <Grid container spacing={10} container item xs={12} justify="space-evenly" alignItems="center">
                            <div className="col-guide">
                                <img className = "imgClass" src={EQ_IMG} />
                                <p className = "Pg"> Earthquake </p>
                            </div>

                            <div className="col-guide">
                                <img className = "imgClass" src={FL_IMG} />
                                <p className = "Pg"> Flood </p>
                            </div>

                            <div className="col-guide">
                                <img className = "imgClass" src={HU_IMG} />
                                <p className = "Pg"> Hurricane </p>
                            </div>
                    </Grid>

                
                <Grid container spacing={10} container item xs={12} justify="space-evenly" alignItems="center">
                        <div className="col-guide">
                            <img className = "imgClass" src={VL_IMG} />
                            <p className = "Pg"> Volcano </p>
                        </div>

                        <div className="col-guide">
                            <img className = "imgClass" src={TR_IMG} />
                            <p className = "Pg"> Tornado </p>
                        </div>

                        <div className="col-guide">
                            <img className = "imgClass" src={WF_IMG} />
                            <p className = "Pg"> Wildfire </p>
                        </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default GuideBody
import React from 'react';
import "./GuideBody.css";

// Images
import EQ_IMG from "./Icons/005-earthquake.png";
import FL_IMG from "./Icons/007-flood.png";
import HU_IMG from "./Icons/012-hurricane.png";
import VL_IMG from "./Icons/030-volcano.png";
import TR_IMG from "./Icons/025-tornado.png";
import WF_IMG from "./Icons/006-burning.png";

const GuideBody = () => {
    return(
        <div>
            <h1> GUIDES FOR NATURAL DISASTERS </h1>
            <div className="row">
                <div className="col-bd">
                    <div className="col-guide">
                        <img src={EQ_IMG} />
                        <p> Earthquake </p>
                    </div>

                    <div className="col-guide">
                        <img src={FL_IMG} />
                        <p> Flood </p>
                    </div>

                    <div className="col-guide">
                        <img src={HU_IMG} />
                        <p > Hurricane </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-bd">
                    <div className="col-guide">
                        <img src={VL_IMG} />
                        <p> Volcano </p>
                    </div>

                    <div className="col-guide">
                        <img src={TR_IMG} />
                        <p> Tornado </p>
                    </div>

                    <div className="col-guide">
                        <img src={WF_IMG} />
                        <p > Wildfire </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuideBody
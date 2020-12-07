import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import 'materialize-css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Button} from '../Button/Button';
import "./Donate.css";
import Org1 from "./ARC.png";
import Org2 from "./AV.png";
import Org3 from "./FA.png";
import Org4 from "./SA.png";
import PostServices from "../../api-services/Organization";


const classes = {
    Paper:{padding: 20, marginTop: 10, marginBottom: 10}
}

class Donate extends Component {
  
    render() {
        return (
            <div>
                <div className = "banner">
                    <div className="donation">
                    <h4>
                        SUPPORT COMMUNITIES IN NEED
                    </h4>
                        <p >
                        What can we do to help those in need?
                        </p>

                        <p>
                        Disaster Broadcaster believes knowledge is power.
                        
                        Power to make a difference. Our purpose is to spread awareness and provide updates on real disasters and life changing events that are occuring in our world.
                        </p>

                        <p>
                        By staying educated and aware, we can take action and help those who are amidst a terrifying and challenging times. Below, we have provided links to non-profit organizations that help provide relief to the areas and groups that are affected by these events.
                        </p>
                    </div>
                </div>

            <Grid container style={{paddingTop:"10px"}}>
                
                <Grid item style={{textAlign:"center"}} xs={12} sm={3}>
                    <div className = "Org">
                    <a href="https://www.redcross.org/"><img width="220px" height="220px" src = {Org1} alt=""/></a>
                    </div>
                    
                    
                </Grid>

                <Grid item style={{textAlign:"center"}} xs={12} sm={3} justify="center">
                    <div className = "Org">
                    <a href="https://www.agape-volunteers.com/"> <img  width="220px" height="220px" src = {Org2} alt=""/></a>
                    </div>
                
                </Grid>         
                        
                <Grid item style={{textAlign:"center"}} xs={12} sm={3} justify="center">
                    <div className = "Org">
                    <a href="https://www.feedingamerica.org/"> <img width="220px" height="220px" src = {Org3} alt=""/>   </a>
                    </div>
                </Grid>     
    
                <Grid item style={{textAlign:"center"}} xs={12} sm={3} justify="center">       
                <div className = "Org">
                <a href="https://www.salvationarmyusa.org/usn/"> <img  width="220px" height="220px" src = {Org4} alt=""/></a>
                </div>
                
                </Grid>

            </Grid>

            
            </div>
        )    
    }
    
}

export default Donate
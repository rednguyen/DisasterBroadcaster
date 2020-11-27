import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LOGO_IMG from "../NavBar/Logo.png";
import './AboutHeader.css'

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      height: '100%',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(5),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(6),
        },
    },
}));

export default function GuideHeader(props) {
    const classes = useStyles();
    const post = props;
  
    return (
            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://miro.medium.com/max/960/1*zBCe432GigefM25ogcqsww.jpeg)`, height: 737}}>
                {/* Increase the priority of the hero background image */}
                {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
                <div className={classes.overlay}style={{ paddingTop: 150 }}>
                    <Grid container className="information" alignItems="center" justify="center">
                        <Grid item md={10}>
                            <div className={classes.mainFeaturedPostContent}>
                            <h1 className="header">
                                Disaster Broadcaster
                            </h1>
                            <h3 className="subheader">
                                Keeping the world informed and aware.
                            </h3>
                            <img className="logo-img" src={LOGO_IMG} alt="logo"/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
    );
  }
  
  GuideHeader.propTypes = {
    post: PropTypes.object,
  };
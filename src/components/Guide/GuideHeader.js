import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './GuideHeader.css'

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      height: '100%',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(20),
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
            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://i.pinimg.com/originals/06/b0/3f/06b03f3adb2f86a5c1a6085601e97933.jpg)`, height: 737}}>
                {/* Increase the priority of the hero background image */}
                {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
                <div className={classes.overlay} style={{ paddingTop: 150 }}>
                    <Grid container className="information" alignItems="center" justify="center">
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                            <h1 className="header">
                                Disaster Guide
                            </h1>
                            <h3 className="subheader">
                                Learn how to prepare for a disaster, protect yourself during a disaster, and stay safe after a disaster.
                            </h3>
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
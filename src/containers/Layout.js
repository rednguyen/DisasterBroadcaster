import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { default as StyledFooter } from '../components/Footer/Container/FooterContainer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class CustomLayout extends React.Component {
  render() {
    return (
      <div className="Wrapper">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper><div className="TopPage"><NavBar {...this.props}/></div></Paper>
          </Grid>
          <Grid item xs={12} {...this.props}>
            {this.props.children}
          </Grid>
          <Grid item xs={12}>
            <Paper><div class = "BottomPage"><StyledFooter /></div></Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(CustomLayout);
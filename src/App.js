
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom'
import BaseRouter from "./routes";
import { connect } from 'react-redux';
import * as actions from './actions/auth';
import React, { Component } from 'react';
import CustomLayout from './containers/Layout';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <BrowserRouter> 
        <CustomLayout {...this.props}>
          <BaseRouter />
        </CustomLayout>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

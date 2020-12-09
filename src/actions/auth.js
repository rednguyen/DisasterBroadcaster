import * as actionTypes from './actionTypes';
import UserServices from "../api-services/User";
import axios from 'axios';
const userServices = new UserServices();

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');
  userServices.logout()
  return {
    type: actionTypes.AUTH_LOGOUT
  }

}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  }
}

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    userServices.login(username, password)
    .then(res => {
      if(res.status !== 200){
        throw new Error(res.status)
      }
      const token = res.data.token;
      const expirationDate = new Date(new Date().getTime() + 3600* 1000);
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch(err => {
      dispatch(authFail(err))
    })
  }
}

export const authSignup = (username, password, email, country_id, answer) => {
  return dispatch => {
    console.log(answer);
    dispatch(authStart());
    userServices.create(
      {
        username: username,
        password: password,
        email: email,
        country_id: country_id,
        answer: answer
      }
    )
    .then(res => {
      if(res.status !== 201){
        throw new Error(res.status)
      }
      dispatch(authLogin(username,password))
    })
    .catch(err => {
      dispatch(authFail(err))
    })
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if(token === undefined){
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if(expirationDate <= new Date()){
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000) );
      }
    }
  }
}
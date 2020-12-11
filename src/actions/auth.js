import * as actionTypes from './actionTypes';
import UserServices from "../api-services/User";
const userServices = new UserServices();

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    user: user
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');
  userServices.logout();
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
      const user = {
        id: res.data.user.id,
        username: res.data.user.username,
        avatar: res.data.user.avatar
      };
      const expirationDate = new Date(new Date().getTime() + 3600* 1000);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(authSuccess(token, user));
      dispatch(checkAuthTimeout(86400));
    })
    .catch(err => {
      dispatch(authFail(err))
    })
  }
}

export const authSignup = (username, password, email, country_id, answer, avatar) => {
  return dispatch => {
    dispatch(authStart());
    userServices.create(
      {
        username: username,
        password: password,
        email: email,
        country_id: country_id,
        answer: answer,
        avatar: avatar
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
    const user = JSON.parse(localStorage.getItem('user'));
    if(token === undefined){
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if(expirationDate <= new Date()){
        dispatch(logout());
      } else {
        dispatch(authSuccess(token, user));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000) );
      }
    }
  }
}
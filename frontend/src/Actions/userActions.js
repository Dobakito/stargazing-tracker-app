import axios from 'axios';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function createUser(user) {
  return dispatch => {
    axios
      .post('http://localhost:3001/users', { user }, { withCredentials: true })
      .then(({ data }) => {
        if (data.logged_in === true) {
          dispatch({ type: LOGIN_USER, user: data.user });
        }
      })
      .catch(err => console.log(err));
  };
}

export function getUser(user) {
  return dispatch => {
    console.log(user);
    axios
      .post('http://localhost:3001/login', user, { withCredentials: true })
      .then(({ data }) => {
        if (data.logged_in === true) {
          dispatch({ type: LOGIN_USER, user: data.user });
        }
      })
      .catch(err => console.log(err));
  };
}

export function logoutUser() {
  return dispatch => {
    axios
      .post('http://localhost:3001/logout', { withCredentials: true })
      .then(res => dispatch({ type: LOGOUT_USER }))
      .catch(error => console.log(error));
  };
}

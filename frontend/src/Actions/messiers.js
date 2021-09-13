import axios from 'axios';

export const ADD_MESSIERS = 'ADD_MESSIERS';
export const ADD_OBSERVATION = 'ADD_OBSERVATION';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function getAllMessiers() {
  return dispatch => {
    axios
      .get('http://localhost:3001/messiers')
      .then(({ data }) => dispatch({ type: ADD_MESSIERS, messiers: data }));
  };
}

export function createUser(user) {
  return dispatch => {
    axios
      .post('http://localhost:3001/users', { user })
      .then(({ data }) => {
        console.log(data);
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
      .post('http://localhost:3001/login', user)
      .then(({ data }) => {
        if (data.logged_in === true) {
          dispatch({ type: LOGIN_USER, user: data.user });
        }
      })
      .catch(err => console.log(err));
  };
}

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const addObservation = (messier, user) => ({
  type: ADD_OBSERVATION,
  payload: [messier, user],
});

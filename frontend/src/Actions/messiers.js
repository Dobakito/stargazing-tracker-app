import axios from 'axios';
export const ADD_OBSERVATIONS = 'ADD_OBSERVATIONS';
export const ADD_MESSIERS = 'ADD_MESSIERS';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function getAllMessiers() {
  return dispatch => {
    axios
      .get('http://localhost:3001/messiers')
      .then(({ data }) => dispatch({ type: ADD_MESSIERS, messiers: data }))
      .catch(error => console.log(error));
  };
}

export function createUser(user) {
  return dispatch => {
    axios
      .post('http://localhost:3001/users', { user }, { withCredentials: true })
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

export const addObservation = (messierId, userId) => {
  return dispatch => {
    console.log({ messierId, userId });
    axios
      .post('http://localhost:3001/observations', { messierId, userId })
      .then(({ data }) =>
        dispatch({ type: ADD_OBSERVATIONS, observations: data.observations })
      )
      .catch(error => console.log(error));
  };
};

export const getObservations = () => {
  return dispatch => {
    axios
      .get('http://localhost:3001/observations')
      .then(({ data }) =>
        dispatch({ type: ADD_OBSERVATIONS, observations: data.observations })
      )
      .catch(error => console.log(error));
  };
};

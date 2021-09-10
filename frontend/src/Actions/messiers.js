import axios from 'axios';

export const ADD_MESSIERS = 'ADD_MESSIERS';
export const ADD_OBSERVATION = 'ADD_OBSERVATION';
export const ADD_USER = 'ADD_USER';

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
      .then(({ data }) => dispatch({ type: ADD_USER, user: data }));
  };
}

export function getUser(user) {
  return dispatch => {
    axios.get;
  };
}

export const addObservation = (messier, user) => ({
  type: ADD_OBSERVATION,
  payload: [messier, user],
});

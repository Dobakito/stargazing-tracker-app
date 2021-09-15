import axios from 'axios';
export const ADD_OBSERVATIONS = 'ADD_OBSERVATIONS';

export const addObservation = (messier_id, user_id) => {
  return dispatch => {
    axios
      .post(`http://localhost:3001/users/${user_id}/observations`, {
        messier_id,
        user_id,
      })
      .then(({ data }) =>
        dispatch({ type: ADD_OBSERVATIONS, observations: data.observations })
      )
      .catch(error => console.log(error));
  };
};

export const getObservations = user_id => {
  return dispatch => {
    axios
      .get(`http://localhost:3001/users/${user_id}/observations`)
      .then(({ data }) =>
        dispatch({ type: ADD_OBSERVATIONS, observations: data.observations })
      )
      .catch(error => console.log(error));
  };
};

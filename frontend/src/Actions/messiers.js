export const GET_ALL_MESSIERS = 'GET_ALL_MESSIERS';
export const GET_MESSIER = 'GET_MESSIER';
export const ADD_OBSERVATION = 'ADD_OBSERVATION';

export const getMessier = messier => ({
  type: GET_MESSIER,
  payload: messier,
});

export function getAllMessiers() {
  return dispatch => {
    fetch('http://localhost:3001/messiers')
      .then(response => response.json())
      .then(messiers => console.log(messiers));
  };
}

export const addObservation = (messier, user) => ({
  type: ADD_OBSERVATION,
  payload: [messier, user],
});

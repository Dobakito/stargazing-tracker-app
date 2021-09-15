import axios from 'axios';
export const ADD_MESSIERS = 'ADD_MESSIERS';
export const ADD_APOD = 'ADD_APOD';

export function getAllMessiers() {
  return dispatch => {
    axios
      .get('http://localhost:3001/messiers')
      .then(({ data }) => dispatch({ type: ADD_MESSIERS, messiers: data }))
      .catch(error => console.log(error));
  };
}

export function getNasaPic() {
  return dispatch => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=MbDta2jpJYYuR0sqggJKGiMxKjmJFCZ9B4rNV9sm'
      )
      .then(({ data }) => dispatch({ type: ADD_APOD, apod: data }))
      .catch(error => console.log(error));
  };
}

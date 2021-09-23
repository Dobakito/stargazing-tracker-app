import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';

export function createFriend(user_id, friend_id) {
  return dispatch => {
    axios
      .post(
        `http://localhost:3001/users/${user_id}/friendships`,
        { user_id, friend_id },
        { withCredentials: true }
      )
      .then(({ data }) => {
        if (data.success === true) {
          dispatch({ type: GET_FRIENDS, friends: data.friends });
        }
      })
      .catch(err => console.log(err));
  };
}

export function getFriends(user_id) {
  return dispatch => {
    axios
      .get(`http://localhost:3001/users/${user_id}/friendships`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch({ type: GET_FRIENDS, friends: data.friends });
      })
      .catch(err => console.log(err));
  };
}

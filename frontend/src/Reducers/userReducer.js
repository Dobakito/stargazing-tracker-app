import history from '../utils/history';

const initialState = {
  user: {},
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      history.push('/objects');
      return {
        user: action.user,
        isLoggedIn: true,
      };
    case 'LOGOUT_USER':
      return {
        user: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

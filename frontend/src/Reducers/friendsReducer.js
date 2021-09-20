const initialState = {
  friends: [],
};

export function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_FRIENDS':
      return { ...state, friends: action.friends };
    case 'LOGOUT_USER':
      return initialState;
    default:
      return initialState;
  }
}

export const initialState = {
  users: [],
  results: [],
  value: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.users };
    case 'CLEAN_QUERY':
      return { ...state, results: [], value: '' };
    case 'START_SEARCH':
      return { ...state, value: action.query };
    case 'FINISH_SEARCH':
      return { ...state, results: action.results };
    case 'LOGOUT_USER':
      return initialState;
    default:
      return state;
  }
};

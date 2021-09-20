export const initialSearchState = {
  users: [],
  results: [],
  value: '',
};

export const searchReducer = (state = initialSearchState, action) => {
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
      return initialSearchState;
    default:
      return state;
  }
};

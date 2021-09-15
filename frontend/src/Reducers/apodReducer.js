const initialState = {
  apod: [],
};

export const apodReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_APOD':
      return {
        ...state,
        apod: action.apod,
      };
    case 'LOGOUT_USER':
      return {
        apod: [],
      };
    default:
      return state;
  }
};

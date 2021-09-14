const initialState = {
  observations: [],
};

export const observationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OBSERVATIONS':
      return {
        ...state,
        observations: action.observations,
      };
    case 'LOGOUT_USER':
      return {
        observations: [],
      };
    default:
      return state;
  }
};

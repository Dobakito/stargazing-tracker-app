const initialState = {
  messiers: [],
};

export const messierReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSIERS':
      return {
        ...state,
        messiers: action.messiers,
      };
    default:
      return state;
  }
};

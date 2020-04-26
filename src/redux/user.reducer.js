/*
Reducers specify how the application's state changes in response to actions sent to the store.
The reducer is a pure function that takes the previous state and an action, and returns the next state.
*/

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

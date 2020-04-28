import MENU_DATA from './menu.data';

import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
  collections: MENU_DATA,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;

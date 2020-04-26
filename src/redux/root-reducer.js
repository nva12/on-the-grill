/*
The root reducer combines the different reducers, which are slices of state, into a single object.
*/

import { combineReducers } from 'redux';

import userReducer from './user.reducer';

export default combineReducers({
  user: userReducer,
});

/*
The root reducer combines the different reducers, which are slices of state, into a single object.
*/

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // use local storage as default storage

import userReducer from './user.reducer';
import cartReducer from './cart.reducer';
import directoryReducer from './directory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // no need to persist user because handled by firebase
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);

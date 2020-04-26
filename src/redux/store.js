/*
The Store is the object that holds application state. It brings together the actions that represent the facts about “what happened” and the reducers that update the state according to those actions.
*/

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

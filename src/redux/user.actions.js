/*
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.
Actions must have a type property that indicates the type of action being performed, typically defined as string constants.
*/
import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

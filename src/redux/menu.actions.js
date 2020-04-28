import MenuActionTypes from './menu.types';

export const updateCollections = (collectionsMap) => ({
  type: MenuActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

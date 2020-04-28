import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectCollections = createSelector(
  [selectMenu],
  (menu) => menu.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

import React from 'react';

import {
  CollectionItemContainer,
  CollectionItemImageContainer,
  CollectionItemFooterContainer,
  CollectionItemFooterName,
  CollectionItemFooterPrice,
} from './collection-item.styles';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <CollectionItemContainer>
    <CollectionItemImageContainer imageUrl={imageUrl} />
    <CollectionItemFooterContainer>
      <CollectionItemFooterName>{name}</CollectionItemFooterName>
      <CollectionItemFooterPrice>$ {price}</CollectionItemFooterPrice>
    </CollectionItemFooterContainer>
  </CollectionItemContainer>
);

export default CollectionItem;

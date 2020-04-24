import React from 'react';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl = undefined }) => (
  <MenuItemContainer>
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>ORDER NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default MenuItem;

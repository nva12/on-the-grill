import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);

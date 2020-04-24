import React from 'react';

import { DirectoryContainer } from './directory.styles';
import MenuItem from './menu-item.component';

const Directory = () => (
  <DirectoryContainer>
    <MenuItem title="Appetizers" />
    <MenuItem title="Grill" />
    <MenuItem title="Salads" />
    <MenuItem title="Sides" />
    <MenuItem title="Desserts" />
    <MenuItem title="Drinks" />
  </DirectoryContainer>
);

export default Directory;

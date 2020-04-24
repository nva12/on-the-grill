import React from 'react';

import { StyledButton } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <StyledButton className="custom-button" {...otherProps}>
    {children}
  </StyledButton>
);

export default CustomButton;

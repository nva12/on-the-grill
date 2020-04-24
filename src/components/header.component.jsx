import React from 'react';
import { ReactComponent as Logo } from '../assets/burger-icon.svg';

import {
  HeaderContainer,
  LogoContainer,
  BrandContainer,
  BrandName,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = () => (
  <HeaderContainer>
    <BrandContainer to="/">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <BrandName>On The Grill</BrandName>
    </BrandContainer>
    <OptionsContainer>
      <OptionLink to="/menu">Menu</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;

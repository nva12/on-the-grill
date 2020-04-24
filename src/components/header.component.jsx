import React from 'react';
import { ReactComponent as Logo } from '../assets/burger-icon.svg';

import {
  HeaderContainer,
  LogoContainer,
  BrandContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <BrandContainer>On The Grill</BrandContainer>
    <OptionsContainer>
      <OptionLink to="/menu">Menu</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;

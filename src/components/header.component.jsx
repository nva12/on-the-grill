import React from 'react';
import { connect } from 'react-redux'; // connect is a HOC
import { ReactComponent as Logo } from '../assets/burger-icon.svg';
import { auth } from '../firebase/firebase.utils';
import {
  HeaderContainer,
  LogoContainer,
  BrandContainer,
  BrandName,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <BrandContainer to="/">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <BrandName>On The Grill</BrandName>
    </BrandContainer>
    <OptionsContainer>
      <OptionLink to="/menu">Menu</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Sign In</OptionLink>
      )}
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);

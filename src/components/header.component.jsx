import React from 'react';
import { connect } from 'react-redux'; // connect is a HOC
import { createStructuredSelector } from 'reselect';
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
import CartIcon from './cart-icon.component';
import CartDropdown from './cart-dropdown.component';
import { selectCartHidden } from '../redux/cart.selectors';
import { selectCurrentUser } from '../redux/user.selectors';

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

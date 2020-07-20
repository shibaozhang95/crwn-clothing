import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crwn.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, cartHidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
        :
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      cartHidden ? null :
      (<CartDropdown />)
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
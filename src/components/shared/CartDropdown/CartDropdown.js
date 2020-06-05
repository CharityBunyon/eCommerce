import React from 'react';
import { connect } from 'react-redux';
import CustomBtn from '../CustomBtn/CustomBtn';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../../redux/cart/cart.selectors';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomBtn>GO TO CHECKOUT</CustomBtn>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);

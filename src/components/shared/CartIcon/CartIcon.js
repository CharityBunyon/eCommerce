/* eslint-disable import/named */
import React from 'react';
import { connect } from 'react-redux';
import toggleCartHidden from '../../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ toogleCartHidden }) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);


const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

// Added toogle and connect to see the trigger in the console.
// Cart state turns from true to false if you click the cart icon

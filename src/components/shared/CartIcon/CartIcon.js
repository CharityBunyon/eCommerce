import React from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/named
import toggleCartHidden from '../../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';
import './CartIcon.scss';

// eslint-disable-next-line no-shadow
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import React from 'react';
import CustomBtn from '../CustomBtn/CustomBtn';
import './CartDropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomBtn>GOT TO CHECKOUT</CustomBtn>
        </div>
    </div>
);

export default CartDropdown;

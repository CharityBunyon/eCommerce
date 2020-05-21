import CartActionTypes from './cart.types';

const toogleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export default { toogleCartHidden };


// 3. Imported to CartIcon

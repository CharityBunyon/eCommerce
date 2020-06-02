import CartActionTypes from './cart.types';


const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export default addItem;

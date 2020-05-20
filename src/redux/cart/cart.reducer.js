import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden, // switch from it's previous state to its opposite state
      };
    default:
      return state;
  }
};

export default cartReducer;

// started here

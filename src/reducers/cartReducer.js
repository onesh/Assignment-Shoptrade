import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT_COUNT,
} from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
    case UPDATE_PRODUCT_COUNT:
      return { ...state, items: action.payload.cartItems };
    default:
      return state;
  }
}

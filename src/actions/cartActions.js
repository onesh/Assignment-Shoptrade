import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_COUNT } from "./types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cartItem) => {
    if (
      cartItem.id === product.id &&
      cartItem.selectedOptionId === product.selectedOptionId
    ) {
      cartItem.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};

export const updateProductCount = (items, product, count) => (dispatch) => {
  const cartItems = items.slice();
  cartItems.forEach((cartItem) => {
    if (
      cartItem.id === product.id &&
      cartItem.selectedOptionId === product.selectedOptionId
    ) {
      cartItem.count = count;
    }
  });

  dispatch({ type: UPDATE_PRODUCT_COUNT, payload: { cartItems } });
};

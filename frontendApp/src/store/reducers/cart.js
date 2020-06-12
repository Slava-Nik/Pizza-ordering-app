import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../constants/ActionTypes";

const INITIAL_STATE = [];

const addProductToCart = (cart, itemToAdd) => {
  const similarPositionInCartIndex = cart.findIndex((cartItem) => (cartItem.id === itemToAdd.id)
  && (cartItem.size === itemToAdd.size)
  && (cartItem.doughType === itemToAdd.doughType));

  const updatedCart = [...cart];

  if (similarPositionInCartIndex !== -1) {
    const similarPositionInCart = cart[similarPositionInCartIndex];
    const updatedPosition = { ...similarPositionInCart };
    updatedPosition.quantity += 1;
    updatedPosition.price += itemToAdd.price;
    updatedCart.splice(similarPositionInCartIndex, 1, updatedPosition);
  } else {
    updatedCart.push(itemToAdd);
  }
  console.log(updatedCart);
  return updatedCart;
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return addProductToCart(state, payload.itemToAdd);
    case REMOVE_PRODUCT_FROM_CART:
      return payload.updatedCart;
    default:
      return state;
  }
};

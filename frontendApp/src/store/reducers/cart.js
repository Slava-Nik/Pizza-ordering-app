import {
  ADD_PRODUCT_TO_CART,
  REMOVE_POSITION_FROM_CART,
  DECREMENT_POSITION_IN_CART,
  INCREMENT_POSITION_IN_CART,
  CLEAR_CART,
} from "../constants/ActionTypes";

const INITIAL_STATE = [];

const getItemIndexInCart = (cart, item) => cart.findIndex((cartItem) => (cartItem.id === item.id)
  && (cartItem.size === item.size)
  && (cartItem.doughType === item.doughType));


const addProductToCart = (cart, item) => {
  const similarPositionInCartIndex = getItemIndexInCart(cart, item);
  const updatedCart = [...cart];

  if (similarPositionInCartIndex !== -1) {
    const similarPositionInCart = cart[similarPositionInCartIndex];
    const updatedPosition = { ...similarPositionInCart };
    updatedPosition.quantity += 1;
    updatedPosition.price += item.price;
    updatedCart.splice(similarPositionInCartIndex, 1, updatedPosition);
  } else {
    updatedCart.push(item);
  }

  return updatedCart;
};

const removePositionFromCart = (cart, item) => {
  const positionToRemoveIndex = getItemIndexInCart(cart, item);
  const updatedCart = [...cart];
  if (positionToRemoveIndex !== -1) {
    updatedCart.splice(positionToRemoveIndex, 1);
  }
  return updatedCart;
};

const editPositionQuantityInCart = (cart, item, value) => {
  const positionToEditIndex = getItemIndexInCart(cart, item);
  const updatedCart = [...cart];
  if (positionToEditIndex !== -1) {
    const positionToDecrement = cart[positionToEditIndex];
    const updatedPosition = { ...positionToDecrement };
    const singleItemPrice = updatedPosition.price / updatedPosition.quantity;
    if (value === "increment") {
      updatedPosition.quantity += 1;
      updatedPosition.price += singleItemPrice;
    } else if (updatedPosition.quantity !== 1) {
      if (updatedPosition.quantity !== 1) {
        updatedPosition.quantity -= 1;
        updatedPosition.price -= singleItemPrice;
      }
    }
    updatedCart.splice(positionToEditIndex, 1, updatedPosition);
  }
  return updatedCart;
};


export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return addProductToCart(state, payload.itemToAdd);
    case REMOVE_POSITION_FROM_CART:
      return removePositionFromCart(state, payload.itemToRemove);
    case DECREMENT_POSITION_IN_CART:
      return editPositionQuantityInCart(state, payload.itemToDecrement, "decrement");
    case INCREMENT_POSITION_IN_CART:
      return editPositionQuantityInCart(state, payload.itemToIncrement, "increment");
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

import { createSelector } from "reselect";

const getCartSelector = (state) => state.cart;

export const totalCartPriceSelector = createSelector(
  [getCartSelector],
  (cart) => cart.reduce(
    (totalPrice, currentPosition) => totalPrice + currentPosition.price,
    0,
  ),
);
export const totalCartProductsSelector = createSelector(
  [getCartSelector],
  (cart) => cart.reduce(
    (totalProducts, currentPosition) => totalProducts + currentPosition.quantity,
    0,
  ),
);

export const totalCartProductsByIdSelector = (productId) => createSelector(
  [getCartSelector],
  (cart) => cart.reduce(
    (totalProducts, currentPosition) => {
      if (currentPosition.id === productId) return totalProducts + currentPosition.quantity;
      return totalProducts;
    },
    0,
  ),
);

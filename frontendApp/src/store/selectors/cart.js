import { createSelector } from "reselect";

const getProductsSelector = (state) => state.products.data;
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

export const cartProductsDataSelector = createSelector(
  [getProductsSelector, getCartSelector],
  (products, cart) => {
    const resultCartProducts = [];
    cart.forEach((cartPosition) => {
      const cartItem = { ...cartPosition };
      const productObj = products.find((product) => product.id === cartItem.id);
      if (productObj) {
        cartItem.title = productObj.title;
        cartItem.imageSrc = productObj.imageSrc;
        resultCartProducts.push(cartItem);
      }
    });
    return resultCartProducts;
  },
);

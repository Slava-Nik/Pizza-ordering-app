// eslint-disable-next-line import/prefer-default-export
export const getEURSelector = (state) => (
  state.currency.data ? state.currency.data.usd : null
);

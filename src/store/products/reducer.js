import { LOAD_PRODUCTS, RATE_PRODUCT } from "./actions";

const initialState = {
  list: {},
};

export const products = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return Object.assign({}, state, {
        list: action.payload.reduce((accumulator, product) => {
          accumulator[product.id] = product;
          return accumulator;
        }, {})
      });
    case RATE_PRODUCT:
      const product = state.list[action.id];
      return Object.assign({}, state, {
        list: {
          ...state.list,
          [action.id]: Object.assign({}, product, { rating: action.rating }) }
      });
    default:
      return state;
  }
};

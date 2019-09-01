import { LOAD_PRODUCTS } from "./actions";

export const products = (
  state = {
    list: []
  },
  action
) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { list: action.payload };
    default:
      return state;
  }
};

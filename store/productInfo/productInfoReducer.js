import { ADD_PRODUCT_INFO } from "./types";

const initialState = {
  product: {}
};

const productInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_INFO:
      return { ...state, product: action.data };

    default:
      return state;
  }
};

export default productInfoReducer;

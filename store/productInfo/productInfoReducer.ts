import { ADD_PRODUCT_INFO, ProductInfoState, ProductInfoActionTypes } from "./types";

const initialState: ProductInfoState = {
  product: {}
};

  const productInfoReducer = (state = initialState, action: ProductInfoActionTypes): ProductInfoState => {
  switch (action.type) {
    case ADD_PRODUCT_INFO:
      return { ...state, product: action.data };

    default:
      return state;
  }
};

export default productInfoReducer;

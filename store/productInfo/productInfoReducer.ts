import { ADD_PRODUCT_INFO, ProductInfoState, ProductInfoActionTypes } from "./types";

const initialState: ProductInfoState = {
  product: null
};

  const productInfoReducer = (state = initialState, action: ProductInfoActionTypes): ProductInfoState => {
  switch (action.type) {
    case ADD_PRODUCT_INFO:
      return { ...state, product: action.payload };

    default:
      return state;
  }
};

export default productInfoReducer;

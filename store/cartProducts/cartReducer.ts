import {
  ADD_QUANTITY,
  SUB_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART_STORAGE,
  ProductToCardState,
  ProductsCardActionTypes
} from "./types";

const initialState: ProductToCardState = {
  productsToCart: [],
};

const cartReducer = (state = initialState, action: ProductsCardActionTypes): ProductToCardState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        productsToCart: [...state.productsToCart, action.product],
      };

      case ADD_TO_CART_STORAGE:
        return {
          ...state,
          productsToCart: [...action.product]
        };

    case REMOVE_FROM_CART:
      return {
        ...state,
        productsToCart: state.productsToCart.filter(
          (product) => product.id !== action.id
        ),
      };

    case ADD_QUANTITY:
      return {
        ...state,
        productsToCart: state.productsToCart.map((product) =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 10 ? product.quantity + 1 : 10,
              }
            : product
        ),
      };

    case SUB_QUANTITY:
      return {
        ...state,
        productsToCart: state.productsToCart.map((product) =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;

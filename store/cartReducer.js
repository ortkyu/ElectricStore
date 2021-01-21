export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const initialState = {
    productsToCart: []
  }
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        debugger
        return {
          ...state, productsToCart:[...state.productsToCart, action.pr]};
      case REMOVE_FROM_CART:
        return {
          ...state,
          productsToCart: state.productsToCart.filter(product => product.id !== action.id)
        };
  
  case ADD_QUANTITY:
    return {
      ...state,
      productsToCart: state.productsToCart.map(product =>
        product.id === action.id
          ? {...product, quantity: product.quantity !== 10 ? product.quantity + 1 : 10}
          : product,
      ),
    };
  case SUB_QUANTITY:
    return {
      ...state,
      productsToCart: state.productsToCart.map(product =>
        product.id === action.id
          ? {
              ...product,
              quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
            }
          : product,
      ),
    };
    default:
      return state;
 }
}


  export default cartReducer
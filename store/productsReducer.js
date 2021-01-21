export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const PRODUCT_BY_ID = "PRODUCT_BY_ID";
export const ADD_TO_CART = 'ADD_TO_CART';
export const SORT_BY_PRICE = "SORT_BY_PRICE";

const initialState = {
    products: []
  }
  debugger
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCTS:
          debugger
        return { ...state, products: [...action.data] };
  
      case PRODUCT_BY_ID:
        return {
          ...state,
          products: state.products.filter((product) => product.id == action.id),
        };
  
      case SORT_BY_PRICE:
        return { ...state, products: state.products.sort(action.sortSelect) };
  
      default:
        return state;
    }
  }


  export default productsReducer
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const PRODUCT_BY_ID = "PRODUCT_BY_ID";
export const ADD_TO_CART = 'ADD_TO_CART';
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const ADD_PRODUCTS_COUNT = 'ADD_PRODUCTS_COUNT';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';





const initialState = {
    products: [],
    pageSize: 3,
    totalProductCount: 0,
    currentPage: 1
  }
  debugger

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCTS:
          debugger
        return { ...state, products: [...action.data] };
  
        case ADD_PRODUCTS_COUNT:
          let counter = 0;

          for (var key in action.data) {
            counter++;
         }
        return { ...state, totalProductCount: counter-1 };

        case SET_CURRENT_PAGE:
          debugger
        return { ...state, currentPage: action.currentPage };

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
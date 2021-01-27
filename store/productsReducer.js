export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const PRODUCT_BY_ID = "PRODUCT_BY_ID";
export const ADD_TO_CART = 'ADD_TO_CART';
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const ADD_PRODUCTS_COUNT = 'ADD_PRODUCTS_COUNT';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const PRODUCT_BY_NAME = 'PRODUCT_BY_NAME';
export const ADD_QUARY = 'ADD_QUARY';




const initialState = {
    products: [],
    pageSize: 3,
    currentPage: 1,
    searchQuery: ''
  }
  

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCTS:
        return { ...state, products: [...action.data] };

        case SET_CURRENT_PAGE:
        return { ...state, currentPage: action.currentPage };

      case SORT_BY_PRICE:
        return { ...state, products: state.products.sort(action.sortSelect) };
  
        case ADD_QUARY:
          return { ...state, searchQuery: action.e};
        
      default:
        return state;
    }
  }


  export default productsReducer
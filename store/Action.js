export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const PRODUCT_BY_ID = "PRODUCT_BY_ID";
export const ADD_TO_CART = 'ADD_TO_CART';
export const SORT_BY_PRICE = "SORT_BY_PRICE";



  export const addProducts = (newProducts) =>  {
      return {
          type: ADD_PRODUCTS,
          newProducts
      } 
  }
  export const changeProductById = (id) => {
      return {
           type: PRODUCT_BY_ID,
           id 
        }
    }
  export const sortProductByPrice = (sortSelect) => ({type: SORT_BY_PRICE, sortSelect}) 


  export const addToCart = pr => {
      return {
          type: ADD_TO_CART, 
          pr
        }
    }

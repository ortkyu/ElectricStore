import React, { useContext, useReducer } from "react";




const GlobalContext = React.createContext();

export const useProducts = () => {
  return useContext(GlobalContext);
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: [...action.newProducts] };

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
};

    const cartReducer = (state, action) => {
      switch (action.type) {
        case ADD_TO_CART:
          debugger
          return {
            ...state, productsToCart:[state.productsToCart, action.pr]};
        case REMOVE_FROM_CART:
          return {
            ...state,
            productsToCart: state.productsToCart.map(product =>
              product.id === action.id
                ? {...product, selected: false, quantity: 1}
                : product,
            ),
          };
    case ADD_QUANTITY:
      return {
        ...state,
        productsToCart: state.productsToCart.map(product =>
          product.id === action.id
            ? {...product, quantity: product.quantity + 1}
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


export const GlobalProvider = ({ children }) => {



  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        addProducts,
        changeProductById,
        sortProductByPrice,
        addQuantity,
        addToCart,
        productsToCart: state.productsToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

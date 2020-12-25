import React, { useContext, useReducer } from "react";

const ADD_PRODUCTS = "ADD_PRODUCTS";
const PRODUCT_BY_ID = "PRODUCT_BY_ID";
const SORT_BY_PRICE = "SORT_BY_PRICE";

const GlobalContext = React.createContext();

export const useProducts = () => {
  return useContext(GlobalContext);
};

const reducer = (state, action) => {
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

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
  });

  const addProducts = (newProducts) =>
    dispatch({ type: ADD_PRODUCTS, newProducts });
  const addProductById = (id) => dispatch({ type: PRODUCT_BY_ID, id });
  const sortProductByPrice = (sortSelect) =>
    dispatch({ type: SORT_BY_PRICE, sortSelect });

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        addProducts,
        addProductById,
        sortProductByPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const ADD_TO_CART = 'ADD_TO_CART';
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


    export const addToCart = (pr) => ({type: ADD_TO_CART, pr})

    export const addQuantity = (id) => ({type: ADD_QUANTITY, id})

    export const subQuantity = (id) => ({type: SUB_QUANTITY, id})

    export const removeToCart = (id) => ({type: REMOVE_FROM_CART, id})

    

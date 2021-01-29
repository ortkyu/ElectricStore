import {ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY, REMOVE_FROM_CART, ADD_TO_CART_STORAGE} from "./types"



    export const addToCart = (pr) => ({type: ADD_TO_CART, pr})

    export const addToCartStorage = (pr) => ({type: ADD_TO_CART_STORAGE, pr})

    export const addQuantity = (id) => ({type: ADD_QUANTITY, id})

    export const subQuantity = (id) => ({type: SUB_QUANTITY, id})

    export const removeToCart = (id) => ({type: REMOVE_FROM_CART, id})

    

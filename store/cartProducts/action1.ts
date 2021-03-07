import {ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY, REMOVE_FROM_CART, ADD_TO_CART_STORAGE, Product} from "./types"



    export const addToCart = (product: Product) => ({type: ADD_TO_CART, product})

    export const addToCartStorage = (product: Product) => ({type: ADD_TO_CART_STORAGE, product})

    export const addQuantity = (id) => ({type: ADD_QUANTITY, id})

    export const subQuantity = (id) => ({type: SUB_QUANTITY, id})

    export const removeToCart = (id) => ({type: REMOVE_FROM_CART, id})

    

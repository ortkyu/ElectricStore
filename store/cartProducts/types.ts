export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_CART_STORAGE = 'ADD_TO_CART_STORAGE';



export interface Product {
    id: string
    title: string
    vendor: string
    price: number
    quantity: number

  }

  export interface ProductToCardState {
    productsToCart: Product[]
  };

  interface AddQuantity {
    type: typeof ADD_QUANTITY
    id: string
  }
  interface SubQuantity {
    type: typeof SUB_QUANTITY
    id: string
  }
  interface RemoveProduct {
    type: typeof REMOVE_FROM_CART
    id: string
  }
  interface AddToCardStorage {
    type: typeof ADD_TO_CART_STORAGE
    product: Product[]
  }
  interface AddToCard {
    type: typeof ADD_TO_CART
    product: Product
  }
  
  
 
  export type ProductsCardActionTypes = AddQuantity | SubQuantity | RemoveProduct | AddToCardStorage | AddToCard

export const ADD_PRODUCT_INFO = "ADD_PRODUCT_INFO";




export interface Product {
    id: string
    title: string
    vendor: string
    price: number
    quantity: number

  }

export interface ProductInfoState {
    id: string
    title: string
    vendor: string
    price: number
    quantity: number
  }


  interface AddProduct {
    type: typeof ADD_PRODUCT_INFO
    payload: Product
  }
  
  
 
  export type ProductInfoActionTypes = AddProduct 
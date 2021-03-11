import { AnyARecord } from "dns";

export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


export interface Comment {
  [prop:string]: string
}
  export interface Product {
    id: string
    title: string
    vendor: string
    price: number
    quantity: number
    comments?: Comment[]
  }

  export interface ProductState {
    products: Product[],
    pageSize: number,
    currentPage: number,
    searchQuery: string,
  };

  interface AddProductsAction {
    type: typeof ADD_PRODUCTS
    payload: Product[]
  }
  interface SetCurrentPageAction {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
  }

  interface SortByPriceAction {
    type: typeof SORT_BY_PRICE,
    sortSelect: (a: Product,b: Product) => number
  }
  
 
  export type ProductsActionTypes = SortByPriceAction | SetCurrentPageAction | AddProductsAction

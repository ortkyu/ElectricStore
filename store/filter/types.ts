export const ADD_MIN_SEARCH_PRICE = 'ADD_MIN_SEARCH_PRICE';
export const ADD_MAX_SEARCH_PRICE = 'ADD_MAX_SEARCH_PRICE';
export const ADD_QUARY = 'ADD_QUARY';




  export interface FiltertState {
  minSearchPrice: number,
  maxSearchPrice: number,
  searchQuery: string
  }

  interface AddminSearchPrice {
    type: typeof ADD_MIN_SEARCH_PRICE
    payload: number
  }
  interface AddmaxSearchPrice {
    type: typeof ADD_MAX_SEARCH_PRICE
    payload: number
  }
  interface AddsearchQuery {
    type: typeof ADD_QUARY
    payload: string
  }
 
  
 
  export type FilterActionTypes = AddminSearchPrice | AddmaxSearchPrice | AddsearchQuery
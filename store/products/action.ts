import { ADD_PRODUCTS, SORT_BY_PRICE, SET_CURRENT_PAGE, ProductsActionTypes } from "./types";
import { baseUrl } from "../../api";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../reducers'



export const addProducts = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) =>
  fetch(`${baseUrl}/.json`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ADD_PRODUCTS,
        payload: Object.values(data).filter((d: object) => d),
      })
    )
    .catch(err=> {
      console.log("fetchErr",err),  
    dispatch({
      type: ADD_PRODUCTS,
      payload: []
    })})

export const sortProductByPrice = (sortSelect: (a:any,b:any) => any): ProductsActionTypes => ({
  type: SORT_BY_PRICE,
  sortSelect,
});

export const setCurrentPage = (currentPage: number): ProductsActionTypes => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

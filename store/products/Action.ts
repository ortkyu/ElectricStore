import { ADD_PRODUCTS, SORT_BY_PRICE, SET_CURRENT_PAGE, ProductsActoinTypes } from "./types";
import { baseUrl } from "../../api";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../reducers'



export const addProducts = (startId = 0): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) =>
  fetch(`${baseUrl}/.json`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ADD_PRODUCTS,
        data: Object.values(data).filter((d: object) => d),
      })
    );

export const sortProductByPrice = (sortSelect: (a:any,b:any) => number): ProductsActionTypes => ({
  type: SORT_BY_PRICE,
  sortSelect,
});

export const setCurrentPage = (currentPage: number): ProductsActionTypes => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

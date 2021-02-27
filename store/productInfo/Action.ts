import { ADD_PRODUCT_INFO } from "./types";
import { baseUrl } from "../../api";
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../reducers'

export const addProductInfo = (id): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) =>
  fetch(`${baseUrl}/${id}/.json`)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        return dispatch({ type: ADD_PRODUCT_INFO, data: data });
      }
    });

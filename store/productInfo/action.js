import { ADD_PRODUCT_INFO } from "./types";
import { baseUrl } from "../../api";

export const addProductInfo = (id) => (dispatch) =>
  fetch(`${baseUrl}/${id}/.json`)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        return dispatch({ type: ADD_PRODUCT_INFO, data: data });
      }
    });

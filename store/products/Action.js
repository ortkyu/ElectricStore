import { ADD_PRODUCTS, SORT_BY_PRICE, SET_CURRENT_PAGE } from "./types";
import { baseUrl } from "../../api";

export const addProducts = (startId = 0) => (dispatch) =>
  fetch(`${baseUrl}/.json`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ADD_PRODUCTS,
        data: Object.values(data).filter((d) => d),
      })
    );

export const sortProductByPrice = (sortSelect) => ({
  type: SORT_BY_PRICE,
  sortSelect,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

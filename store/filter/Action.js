import { ADD_MIN_SEARCH_PRICE, ADD_MAX_SEARCH_PRICE, ADD_QUARY } from "./types";

export const addQuery = (text) => ({ type: ADD_QUARY, text });

export const addMinPrice = (num) => ({ type: ADD_MIN_SEARCH_PRICE, num });

export const addMaxPrice = (num) => ({ type: ADD_MAX_SEARCH_PRICE, num });

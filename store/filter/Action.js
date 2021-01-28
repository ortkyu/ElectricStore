import { ADD_MIN_SEARCH_PRICE, ADD_MAX_SEARCH_PRICE, ADD_QUARY } from "./types";

export const addQuery = (text) => ({ type: ADD_QUARY, text });

export const addMinPrice = (minNum) => ({ type: ADD_MIN_SEARCH_PRICE, minNum });

export const addMaxPrice = (maxNum) => ({ type: ADD_MAX_SEARCH_PRICE, maxNum });

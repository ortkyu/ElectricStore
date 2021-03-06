import { ADD_MIN_SEARCH_PRICE, ADD_MAX_SEARCH_PRICE, ADD_QUARY } from "./types";

export const addQuery = (text: string) => ({ type: ADD_QUARY, payload: text });

export const addMinPrice = (minNum: number) => ({ type: ADD_MIN_SEARCH_PRICE, payload: minNum });

export const addMaxPrice = (maxNum: number) => ({ type: ADD_MAX_SEARCH_PRICE, payload: maxNum });

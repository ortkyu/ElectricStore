import { ADD_MIN_SEARCH_PRICE, ADD_MAX_SEARCH_PRICE, ADD_QUARY } from "./types";

const initialState = {
  minSearchPrice: 0,
  maxSearchPrice: 1000000,
  searchQuery: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUARY:
      return { ...state, searchQuery: action.text };

    case ADD_MIN_SEARCH_PRICE:
      return { ...state, minSearchPrice: action.num };

    case ADD_MAX_SEARCH_PRICE:
      return { ...state, maxSearchPrice: action.num };

    default:
      return state;
  }
};

export default filterReducer;

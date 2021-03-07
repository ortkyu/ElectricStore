import { ADD_MIN_SEARCH_PRICE, ADD_MAX_SEARCH_PRICE, ADD_QUARY, FiltertState, FilterActionTypes } from "./types";

const initialState: FiltertState = {
  minSearchPrice: 0,
  maxSearchPrice: 1000000,
  searchQuery: "",
};

const filterReducer = (state = initialState, action: FilterActionTypes): FiltertState => {
  switch (action.type) {
    case ADD_QUARY:
      return { ...state, searchQuery: action.payload };

    case ADD_MIN_SEARCH_PRICE:
      return { ...state, minSearchPrice: action.payload };

    case ADD_MAX_SEARCH_PRICE:
      return action.payload > 0
        ? { ...state, maxSearchPrice: +action.payload }
        : { ...state, maxSearchPrice: 100000 };

    default:
      return state;
  }
};

export default filterReducer;

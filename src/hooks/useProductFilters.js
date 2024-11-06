import { useReducer } from "react";

const FILTER_ACTIONS = {
  SET_CATEGORY: "SET_CATEGORY",
  SET_BRAND: "SET_BRAND",
  SET_RATING: "SET_RATING",
  SET_PRICE: "SET_PRICE",
  SET_SORT: "SET_SORT",
  RESET_FILTERS: "RESET_FILTERS",
};

const initialState = {
  sort: "none",
  categories: [],
  brands: [],
  rating: 0,
  minPrice: 0,
  maxPrice: 1000,
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ACTIONS.SET_CATEGORY:
      return { ...state, categories: action.payload };
    case FILTER_ACTIONS.SET_BRAND:
      return { ...state, brands: action.payload };
    case FILTER_ACTIONS.SET_RATING:
      return { ...state, rating: action.payload };
    case FILTER_ACTIONS.SET_PRICE:
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    case FILTER_ACTIONS.SET_SORT:
      return { ...state, sort: action.payload };
    case FILTER_ACTIONS.RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export const useProductFilters = () => {
  const [filter, dispatch] = useReducer(filterReducer, initialState);

  return { filter, dispatch, FILTER_ACTIONS };
};

import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TAG } from "../actions/types";

const initState = { items: [], filteredItems: [], tag: "" };
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_TAG:
      return {
        ...state,
        filteredItems: action.payload.items,
        tag: action.payload.size,
      };
    default:
      return state;
  }
}

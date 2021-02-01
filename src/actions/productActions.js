import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_TAG } from "./types";

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:8000/products")
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const filterProducts = (products, tag) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_TAG,
    payload: {
      tag: tag,
      items:
        tag === "" ? products : products.filter((x) => x.tag.indexOf(tag) >= 0),
    },
  });
};

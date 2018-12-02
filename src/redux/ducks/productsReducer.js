import axios from "axios";

//Initial state--------
const initialState = {
  products: [],
  isLoading: false,
  error: []
};

// Action type----------------------
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

//Action creator--------------------
export function getProducts() {
  return {
    type: GET_PRODUCT,
    payload: axios.get("/api/products")
  };
}

export function addProducts(obj) {
  return {
    type: ADD_PRODUCT,
    payload: axios.post("/api/products", obj)
  };
}
export function deleteProduct() {
  return {
    type: DELETE_PRODUCT,
    payload: axios.delete("/api/delete/:id")
  };
}

// Reducer function-----------------------------------------------------
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_PENDING":
      return { ...state, isLoading: true };
    case "GET_PRODUCT_FULFILLED":
      return { ...state, products: action.payload.data };
    case "GET_PRODUCT_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "ADD_PRODUCT_PENDING":
      return { ...state, isLoading: true };
    case "ADD_PRODUCT_FULFILLED":
      return { ...state, isLoading: false, products: action.payload.data };
    case "ADD_PRODUCT_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "DELETE_PRODUCT_PENDING":
      return { ...state, isLoading: true };
    case "DELETE_PRODUCT_FULFILLED":
      return { ...state, isLoading: false, products: action.payload.data };
    case "DELETE_PRODUCT_REJECTED":
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
}

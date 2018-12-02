import { createStore, applyMiddleware } from "redux";
import { promiseMiddlware } from "redux-promise-middleware";
import productReducer from "../ducks/productsReducer";

const middleware = applyMiddleware(promiseMiddlware());
const store = createStore(productReducer, middleware);

export default store;

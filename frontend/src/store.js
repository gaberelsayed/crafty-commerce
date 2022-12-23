import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, productDetailsReducer } from "./reducers/product";
import {
  userAuthReducer,
  userReducer,
  forgotPasswordReducer,
} from "./reducers/user";

const reducers = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: userAuthReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
});

let initialState = {};

const middleware = [thunk];
const store = configureStore(
  {
    reducer: reducers,
    middleware: [thunk],
  },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

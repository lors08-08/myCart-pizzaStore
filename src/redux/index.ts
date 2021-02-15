import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import cart from "./cart";
import menu from "./menu";

const rootReducer = combineReducers({
  menu,
  cart,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export type RootState = ReturnType<typeof rootReducer>;

export default store;

import { applyMiddleware, combineReducers, createStore } from "redux";
import { tweetsReducer } from "./redux/ducks/tweetsReducer";
import { userReducer } from "./redux/ducks/userReducer";
import logger from "redux-logger";

export const initializeDomainLayer = () => {
  const rootReducer = combineReducers({
    tweets: tweetsReducer,
    user: userReducer
  });
  return { store: createStore(rootReducer, applyMiddleware(logger)) };
};

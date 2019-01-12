import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { tweetsReducer } from "./redux/ducks/tweetsReducer";
import { userReducer } from "./redux/ducks/userReducer";
import logger from "redux-logger";
import { rootSaga } from "./redux/sagas";

export const initializeDomainLayer = () => {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({
    tweets: tweetsReducer,
    user: userReducer
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
  return { store };
};

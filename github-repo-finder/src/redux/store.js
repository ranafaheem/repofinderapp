import { createStore, compose, applyMiddleware } from "redux";
// compose to see what kind of actions are happening in chrome
import rootReducer from "./reducers/index.js";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/index.js";
//apply middleware for saga

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer);
sagaMiddleware.run(rootSaga);
export default store;

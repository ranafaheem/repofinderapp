import { combineReducers } from "redux";
import repos from "./repos";

const rootReducer = combineReducers({
  repos: repos,
});

export default rootReducer;

import statusPrev from "./statusPrev";
import count from "./count";
import { combineReducers } from "redux";

const myReducer = combineReducers({
  statusPrev,
  count
});

export default myReducer;

import { combineReducers } from "redux";
import eventReducers from "./events";
export default combineReducers({
  events: eventReducers
});

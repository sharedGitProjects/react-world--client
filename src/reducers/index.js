import { combineReducers } from "redux";
import eventReducer from "./worldEvent";
import worldReducer from "./world";

export default combineReducers({
  event: eventReducer,
  world: worldReducer,
});

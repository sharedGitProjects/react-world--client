import { combineReducers } from "redux";
import userReducer from "./user";
import eventReducer from "./worldEvent";
import worldReducer from "./world";
import inhabitantReducer from "./inhabitant";

export default combineReducers({
  user: userReducer,
  event: eventReducer,
  world: worldReducer,
  inhabitant: inhabitantReducer,
});

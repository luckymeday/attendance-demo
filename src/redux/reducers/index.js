import { combineReducers } from "redux";
import courseReducer from "./course.reducer";
import alertReducer from "./alert.reducer";

export default combineReducers({
  course: courseReducer,
  alert: alertReducer,
});

import { combineReducers} from "redux";
import todoReducer from "./todoReducer";
import incrementReducer from "./incrementReducer";

export default combineReducers({
  incrementReducer,
  todoReducer,
})
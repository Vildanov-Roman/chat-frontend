import { combineReducers } from "redux";

import dialogsReducer from "./dialogsReducer";
import messagesReducer from "./messagesReducer";
import userReducer from "./userReducer";


export default combineReducers({
  dialogsReducer,
  messagesReducer,
  userReducer
});
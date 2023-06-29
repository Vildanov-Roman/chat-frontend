import { combineReducers } from "redux";

import dialogsReducer from "./dialogsReducer";
import messagesReducer from "./messagesReducer";


export default combineReducers({
  dialogsReducer,
  messagesReducer,
});
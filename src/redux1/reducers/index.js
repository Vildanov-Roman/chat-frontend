import { combineReducers } from "redux";

import dialogsReducer from '../../redux/actions/dialogs';

const rootReducer = combineReducers ({
  dialogs: dialogsReducer
});

export default rootReducer;
const initialState = {
  items: [],
  currentDialog: '',
  messages: [],
  isLoading: false,
}

const dialogsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "DIALOGS:SET_ITEMS":
      return {
        ...state,
        items: payload,
      };
      case "DIALOGS:SET_CURRENT_DIALOG":
      return {
        ...state,
        currentDialog: payload,
      };
      // case "DIALOGS:SET_MESSAGES":
      // return {
      //   ...state,
      //   messages: payload,
      // };
    default:
      return state;
  }
};

export default dialogsReducer;

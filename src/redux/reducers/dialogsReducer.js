const initialState = {
  items: [],
}

const dialogsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "DIALOGS:SET_ITEMS":
      return {
        items: payload
      };  
    default:
      return state
  }
};

export default dialogsReducer;
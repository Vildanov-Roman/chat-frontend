const initialState = {
  items: null,
}

const messagesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "MESSAGES:SET_ITEMS":
      return {
        ...state,
        items: payload,
      };  
    default:
      return state;
  }
};

export default messagesReducer;
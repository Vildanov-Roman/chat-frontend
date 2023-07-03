import dialogApi from 'utils/api/dialogs';

const messagesActions = {
  setMessages: messages => ({
    type: 'MESSAGES:SET_ITEMS',
    payload: messages,
  }),
  setIsLoading: bool => ({
    type: 'MESSAGES:SET_IS_LOADING',
    payload: bool,
  }),
  fetchMessages: dialogId => dispatch => {
    dispatch(messagesActions.setIsLoading(true))
    dialogApi.getAllByDialogId(dialogId).then(({ data }) => {
      dispatch(messagesActions.setMessages(data));
    }).cache(() => {
      dispatch(messagesActions.setIsLoading(false))
    });
  },
};

export default messagesActions;

import dialogApi from 'utils/api/dialogs';

const messagesActions = {
  setMessages: messages => ({
    type: 'MESSAGES:SET_ITEMS',
    payload: messages,
  }),
  fetchMessages: dialogId => dispatch => {
    dialogApi.getAllByDialogId(dialogId).then(({ data }) => {
      dispatch(messagesActions.setMessages(data));
    });
  },
};

export default messagesActions;

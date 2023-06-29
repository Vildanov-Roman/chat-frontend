import dialogApi from "utils/api/dialogs";

const dialogsActions = {
  setDialogs: items => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  setCurrentDialog: id => ({
    type: "DIALOGS:SET_CURRENT_DIALOG",
    payload: id,
  }),
  fetchDialogs: () => dispatch => {
    dialogApi.getAll().then(({data}) => {
      dispatch(dialogsActions.setDialogs(data))
    })
  },
};

export default dialogsActions;
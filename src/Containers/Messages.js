import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Messages from 'components/Messages/Messages';
import messagesActions from '../redux/actions/messagesActions';

const MessagesTab = () => {

  // items - contacts
  const items = useSelector(state => state.dialogsReducer.items); 
  const dialogId = useSelector(state => state.dialogsReducer.currentDialog);

  useEffect(() => {
    if (!dialogId) {
      return;
    }
    messagesActions.fetchMessages(dialogId);
  }, [dialogId])
  
  return (
    <Messages items={items}/>
  );
};

export default MessagesTab;
// connect(({ dialogs }) => dialogs, {fetchDialogs})

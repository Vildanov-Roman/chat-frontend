import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Messages from 'components/Messages/Messages';
import messagesActions from '../redux/actions/messagesActions';

const MessagesTab = ({isLoading}) => {
  // items - contacts
  const messagesRef = useRef(null);
  const items = useSelector(state => state.dialogsReducer.items);
  const dialogId = useSelector(state => state.dialogsReducer.currentDialog);

  useEffect(() => {
    if (dialogId) {
      messagesActions.fetchMessages(dialogId);
    }
  }, [dialogId]);

  useEffect(() => {
      messagesRef.current.scrollTo(0, 9999);
  }, [items]);

  return (
    <Messages blockRef={messagesRef} items={items} isLoading={isLoading}/>
  );
};

export default MessagesTab;
// connect(({ dialogs }) => dialogs, {fetchDialogs})

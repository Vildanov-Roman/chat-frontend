import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import dialogsActions from 'redux/actions/dialogsActions';
import Dialogs from 'components/Dialogs/Dialogs';

const DialogsTab = ({fetchDialogs, userId, currentDialogId, setCurrentDialogId }) => {

  // items - contacts

  const items = useSelector(state => state.dialogsReducer.items);

  const [inputValue, setValue] = useState('');
  const [filtered, setFilteredItems] = useState([]);

  const onChangeInput = (value = '') => {
    setFilteredItems(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  useEffect(() => {
    if (!items?.length) {
      fetchDialogs()
    } else {
      setFilteredItems(items)
    }

  }, [items, fetchDialogs])

  return (
    <Dialogs
      userId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialog={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(DialogsTab);
// connect(({ dialogs }) => dialogs, {fetchDialogs})

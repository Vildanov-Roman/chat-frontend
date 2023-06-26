import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import dialogsActions from 'redux/actions/dialogsActions';
import Dialogs from 'components/Dialogs/Dialogs';

const DialogsTab = ({fetchDialogs, userId }) => {

  const items = useSelector(state => state.dialogReducer);
  const [inputValue, setValue] = useState('');
  const [filtred, setFiltredItems] = useState([]);
  // const items = useSelector(state => state.dialogs.dialods);

  const onChangeInput = (value = '') => {
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  useEffect(() => {
    if (!items) {
      fetchDialogs()
    } else {
      setFiltredItems(items)
    } 
    
  }, [items, fetchDialogs])

  return (
    <Dialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(DialogsTab);
// connect(({ dialogs }) => dialogs, {fetchDialogs})

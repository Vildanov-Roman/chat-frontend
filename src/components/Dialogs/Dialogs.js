import React, { useEffect } from 'react';
import { orderBy } from 'lodash';
import { Input, Empty } from 'antd';
import { useSelector } from 'react-redux';
import dialogsActions from '../../redux/actions/messagesActions';

import DialogItem from '../DialogItem/DialogItem';
import './Dialogs.scss';

const Dialogs = ({id, items, userId, onSearch, inputValue }) => {

  const dialogId = useSelector(state => state.dialogsReducer.currentDialog);

  useEffect(() => {
    if (!dialogId) {
      return;
    }
    dialogsActions.fetchMessages(dialogId);
  }, [dialogId])

  return (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Search contacts"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items ? (
      orderBy(items, ['created_at'], ['desc']).map(item => (
        <DialogItem
          key={item._id}
          id={item._id}
          user={item.user.fullname}
          text={item.text}
          avatar={item.user.avatar}
          unreaded={0}
          isMe={item.user._id === userId}
        />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No dialogs yet'/>
    )}
  </div>
)};

export default Dialogs;

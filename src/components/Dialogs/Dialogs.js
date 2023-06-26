import React from 'react';
import { orderBy } from 'lodash';
import { Input, Empty } from 'antd';

import DialogItem from '../DialogItem/DialogItem';
import './Dialogs.scss';

const Dialogs = ({ items, userId, onSearch, inputValue }) => {
  console.log(items);
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

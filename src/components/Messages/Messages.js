import React from 'react';
import PropTypes from 'prop-types';
import { Empty,Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import Message from 'components/Message/message';
import './messages.scss'

const Messages = ({blockRef, items, isLoading }) => {
// console.log(items)
  const antIcon = (
    <LoadingOutlined spin />
  );

  return (
    <div ref={blockRef} className={classNames("messages", {"messages--loading": isLoading})}>
      {isLoading ? (
        <Spin indicator={antIcon} />
      ) : items && !isLoading ? (
        items.length > 0 ? ( items.map(item => <Message key={item._id} {...item} />)) : ( <Empty description="No messages" />)
        ): ( <Empty description="No dialogs" />
      )}
    </div>
  )
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;

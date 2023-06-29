import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import Message from 'components/Message/message';

const Messages = ({ items }) => {
  
  return items ? (
    <div>
      {items.map(item => (
        <Message {...item} />
      ))}
    </div>
  ) : (
    <Empty description="No messages" />
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;

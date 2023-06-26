import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

import './DialogItem.scss';

import IconReaded from '../IconReaded/index';
import Avatar from 'components/Avatar/Avatar';

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm')
  } else {
    return format(created_at, 'dd.MM.yyyy')
  }
}

const DialogItem = ({ user, text, created_at, unreaded, isMe, avatar }) => {

  return (
  <div
    className={classNames('dialogs__item', {
      'dialogs__item--online': user.isOnline,
    })}
  >
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`}/> */}
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user}</b>
        {<IconReaded isMe={false} isReaded={false} />}
        <span>
          {getMessageTime(new Date())}
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>       
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>
        )}
      </div>
    </div>
  </div>
);}

export default DialogItem;

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
// import ruLocale from 'date-fns/locale/ru'

import classNames from 'classnames';
import { Time } from 'components/Time/time';
import IconReaded from 'components/IconReaded';
import convertCurrentTime from 'utils/helper/convertCurrentTime';


import wave from 'assets/img/wave.svg';
import play from 'assets/img/play.svg';
import pause from 'assets/img/pause.svg';

import './message-style.scss';
import Avatar from '../Avatar/Avatar';

const MessageAudio = ({audioSrc}) => {
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    audioElem.current.addEventListener(
      'playing',
      () => {
        setIsPlaying(true);
      },
      false
    );
    audioElem.current.addEventListener(
      'ended',
      () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0)
      },
      false
    );
    audioElem.current.addEventListener(
      'pause',
      () => {
        setIsPlaying(false);
      },
      false
    );
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);
      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);

  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  return <div className="message__audio">
  <audio ref={audioElem} src={audioSrc} preload="auto" />
  <div
    className="message__audio-progress"
    style={{ width: progress + '%' }}
  />
  <div className="message__audio-info">
    <div className="message__audio-btn">
      <button onClick={togglePlay}>
        {isPlaying ? (
          <img src={pause} alt="Pause" />
        ) : (
          <img src={play} alt="Play" />
        )}
      </button>
    </div>
    <div className="message__audio-wave">
      <img src={wave} alt="wave" style={{ width: '40px' }} />
    </div>
    <span className="message__audio-duration">
      {convertCurrentTime(currentTime)}
    </span>
  </div>
</div>
}

const Message = ({
  avatar,
  user,
  text,
  date,
  audio,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => {
  return (
    <div
      className={classNames(
        'message',
        { 'message--isme': isMe },
        { 'message--is-typing': isTyping },
        { 'message--image': attachments && attachments.length === 1 },
        { 'message--is-audio': audio }
      )}
    >
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className="message__avatar">
          <Avatar user={user} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div class="message__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              {audio && <MessageAudio audioSrc={audio}/>}
            </div>
          )}
          {attachments && (
            <div className="message__attachments">
              {attachments.map((item, index) => (
                <div key={index} className="message__attachments-item">
                  <img
                    src={item.url}
                    alt={item.filename}
                    width="100px"
                    height="100px"
                  />
                </div>
              ))}
            </div>
          )}
          {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;

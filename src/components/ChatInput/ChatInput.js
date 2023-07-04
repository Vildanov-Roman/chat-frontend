import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import { SmileOutlined, AudioOutlined, CheckCircleOutlined } from '@ant-design/icons';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import './ChatInput.scss';
import Uploader from '../Uploader/Uploader';


const ChatInput = () => {

    const [value, setValue] = useState('');
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const toggleEmojiPicker = ()  => {
      setShowEmojiPicker(!emojiPickerVisible);
    };

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible && (<div className='chat-input__emoji-picker'>
          <Picker data={data} onEmojiSelect={console.log} />
        </div>)}
        <Button shape="circle" icon={<SmileOutlined />} onClick={toggleEmojiPicker} />
      </div>
      <Input onChange={handleChange} size='large' placeholder="Type your message" />
      <div className="chat-input__actions">
      <Uploader/>
        {!value ? <Button shape="circle" icon={<AudioOutlined />} /> : <Button shape="circle" icon={<CheckCircleOutlined />} />}

      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;

import React, { useRef } from 'react';
import { Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons';

const Uploader = () => {
  const inputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Здесь вы можете обрабатывать выбранный файл по своему усмотрению
    console.log('Выбранный файл:', file);
  };

  const handleIconClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={inputRef}
        multiple
        style={{ display: 'none' }}
      />
      <Button icon={<CameraOutlined />} onClick={handleIconClick}>
      </Button>
    </div>
  );
};

export default Uploader;

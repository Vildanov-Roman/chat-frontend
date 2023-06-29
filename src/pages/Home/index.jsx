import React from 'react';
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { Button} from 'antd';

import DialogsTab from 'Containers/Dialogs';
import MessagesTab from 'Containers/Messages'

import './home.scss';
import Status from 'components/Status/Status';
import ChatInput from 'components/ChatInput/ChatInput';

const Home = () => {
  // const items = ;
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>Список диалогов</span>
            </div>
            <Button shape="circle" icon={<FormOutlined />} size='small'/>
          </div>

          
          <div className="chat__sidebar-dialogs">
            <DialogsTab
              userID={0}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div/>
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Бульбаш</b>
              <div className="chat__dialog-header-status">
                <Status online/>
              </div>
            </div>
            <Button shape="circle" icon={<EllipsisOutlined style={{ fontSize: '22px' }}/>} />
          </div>
          <div className="chat__dialog-messages">
            <MessagesTab />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>

      {/* <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
        isTyping
      /> */}
    </section>
  );
};

export default Home;

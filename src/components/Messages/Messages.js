import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import Message from "components/Message/message";

const Messages = ({ items }) => {
  return items ? <div>
    <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
              attachments={[
                {
                  filename: 'image.jpg',
                  url: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
                },
                {
                  filename: 'image.jpg',
                  url: 'https://img2.joyreactor.cc/pics/post/full/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg',
                },
                {
                  filename: 'image.jpg',
                  url: 'https://images.prom.ua/2987666805_w640_h640_2987666805.jpg',
                },
              ]}
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Воисттину Салам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
              isMe={true}
              isReaded={true}
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              attachments={[
                {
                  filename: 'image.jpg',
                  url: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
                },
              ]}
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              date="Tue May 09 2023 22:50:58 GMT+0300"
              audio="https://assets.mixkit.co/active_storage/sfx/2317/2317-preview.mp3"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
            <Message
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLxTIlSG973QXrHlUPEZ7L1fl0CWjl-zBQ&usqp=CAU"
              text="Салам попалам"
              date="Tue May 09 2023 22:50:58 GMT+0300"
            />
  </div> : <Empty description="No messages"/>
}
  

  Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
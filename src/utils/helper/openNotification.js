import { notification } from 'antd';

const showNotification = ({ text, type = 'info', title, duration = 3 }) => {
  notification[type]({
    message: title,
    description: text,
    duration,
  });
};

export default showNotification;

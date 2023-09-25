import React from 'react';
import { Form, Input } from 'antd';
// import { MailOutlined } from '@ant-design/icons';
import validate from 'utils/helper/validateField';

const FormField = ({ name,
  placeholder,
  icon,
  type,
  handleChange,
  handleBlur,
  touched,
  errors,
  values }) => {
  return (
    <Form.Item
      name="email"
      validateStatus={validate(name, touched, errors)}
      hasFeedback
      help={!touched[name] ? '' : errors[name]}
    >
      <Input
        id={name}
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Form.Item>
  );
};

export default FormField;

import React from 'react';
import { Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Block from 'components/Block/block';
import Button from 'components/Button/button';
// import validate from 'utils/helper/validateField';

const Loginform = props => {
  const { handleChange, handleBlur, handleSubmit} =
    props;
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            name="email"
            // validateStatus={validate('email', touched, errors)}
            // help={!touched.email ? '' : errors.email}
          >
            <Input
              id="email"
              prefix={
                <LockOutlined
                  type="mail"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              }
              placeholder="E-mail"
              // value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            name="password"
            // validateStatus={validate('password', touched, errors)}
            // help={!touched.password ? '' : errors.password}
            hasFeedback
          >
            <Input
              id="password"
              prefix={
                <LockOutlined
                  type="lock"
                  style={{ color: 'rgba()0,0,0,.25' }}
                />
              }
              size="large"
              type="password"
              placeholder="Password"
              // value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item>            
            <Button onClick={handleSubmit} type="primary" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/signup">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default Loginform;

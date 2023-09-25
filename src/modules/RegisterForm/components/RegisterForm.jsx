import React from 'react';
import { Form, Input } from 'antd';
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  InfoCircleTwoTone,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Button from 'components/Button/button';
import Block from 'components/Block/block';
// import FormField from 'components/FormField/index';
import validate from 'utils/helper/validateField';

const success = false;

const RegisterForm = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, Вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            {/* <FormField
              name="email"
              icon="mail"
              placeholder='E-mail'
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <FormField
              name="fullname"
              icon="user"
              placeholder='Введите Имя'
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            /> */}
            <Form.Item
              name="email"
              validateStatus={validate('email', touched, errors)}
              hasFeedback
              help={!touched.email ? '' : errors.email}
            >
              <Input
                id="email"
                prefix={
                  <MailOutlined
                    type="mail"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="fullname"
              validateStatus={validate('fullname', touched, errors)}
              hasFeedback
              help={!touched.fullname ? '' : errors.fullname}
              rules={[{ required: true, message: 'Please enter your Name!' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="name"
                placeholder="name"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={validate('password', touched, errors)}
              help={!touched.password ? '' : errors.password}
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
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              validateStatus={validate('confirm', touched, errors)}
              help={!touched.confirm ? '' : errors.confirm}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined type="lock" style={{ color: 'rgba()0,0,0,.25' }}/>}
                size="large"
                type="password"
                placeholder="Confirm password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSubmit} type="primary" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: '50px', color: '#08c' }} />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу посчу отправлено письмо со ссылкой на подтверждение
              аккаунта
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;

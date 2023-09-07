import LoginForm from '../LoginForm';

// import { connect } from 'react-redux';

import { withFormik } from 'formik';
import validateForm from 'utils/validate.js';

import userActions from "redux/actions/usersActions";

import store from "redux/store";

// const LoginFormConnected = connect(state => state, userActions)(LoginForm);

const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: values => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(userActions.fetchUserLogin(values))
      .then(({ status }) => {
        if (status === 'success') {
          props.history.push('/');
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: 'LoginForm',
})(LoginForm);

export default LoginFormContainer;
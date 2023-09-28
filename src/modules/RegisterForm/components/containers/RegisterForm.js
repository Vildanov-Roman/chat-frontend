import { withFormik } from "formik";

import RegisterForm from '../RegisterForm'
import validateFunc from 'utils/validate.js'

import userActions from "redux/actions/usersActions";

import store from "redux/store";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    confirm: ""
  }),
  validate: values => {
    let errors = {};
    validateFunc({isAuth: false, values, errors})
    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(userActions.fetchUserRegister(values))
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

  displayName: 'RegisterForm',
})(RegisterForm);
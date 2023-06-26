import { withFormik } from "formik";

import RegisterForm from '../RegisterForm'
import validateFunc from 'utils/validate.js'

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    name: "",
    password: "",
    confirm: ""
  }),
  validate: values => {
    const errors = {};
    validateFunc({isAuth: true, values, errors})

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000); 
  },

  displayName: 'RegisterForm',
})(RegisterForm);
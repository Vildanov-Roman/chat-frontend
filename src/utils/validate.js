const validate = ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = 'Enter E-mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Invalid email address';
      }
    },

    password: value => {
      if (!value) {
        errors.password = 'Enter password';
      } else if (
        !isAuth &&
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
      ) {
        errors.password = 'Too easy password';
      }
    },
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};

export default validate;

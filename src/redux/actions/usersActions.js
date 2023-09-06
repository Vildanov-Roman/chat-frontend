import  openNotification  from 'utils/helper/openNotification';
import  userApi  from 'utils/api/user';

const userActions = {
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data,
  }),
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserData: () => dispatch => {
    userApi
      .getMe()
      .then(({ data }) => {
        dispatch(userActions.setUserData(data));
      })
      .catch(err => {
        if (err.response.status === 403) {
          dispatch(userActions.setIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },
  fetchUserLogin: postData => dispatch => {
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const { token } = data;
        openNotification({
          title: 'Отлично!',
          text: 'Авторизация успешна.',
          type: 'success',
        });
        window.axios.defaults.headers.common['token'] = token;
        window.localStorage['token'] = token;
        dispatch(userActions.fetchUserData());
        dispatch(userActions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {
        openNotification({
          title: 'Ошибка при авторизации',
          text: 'Неверный логин или пароль',
          type: 'error',
        });
      });
  },
  fetchUserRegister: postData => () => {
    return userApi.signUp(postData);
  },
};

export default userActions;
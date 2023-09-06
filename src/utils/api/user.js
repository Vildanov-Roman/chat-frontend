import axios from 'core/axios';

const userApi = {
  signIn: postData => axios.post("/user/signIn", postData),
  // signUp: postData => axios.post("/user/signup", postData),
  // verifyHash: hash => axios.get("/user/verify?hash=" + hash),
  getMe: () => axios.get("/user/me"),
  // findUsers: query => axios.get("/user/find?query=" + query)
};

export default userApi;
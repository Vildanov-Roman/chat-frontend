import axios from 'core/axios';

const dialogApi = {
  getAll: () => axios.get('/dialogs')
};


export default dialogApi;
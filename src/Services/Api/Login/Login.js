import AXIOS_CLIENT from '../axiosClient';
import qs from 'qs';
const url = '/user/login';

export const LoginService = {
  getLogin: (payload) => {
    let formBody = {
      email: payload.email,
      password: payload.password,
    };

    return AXIOS_CLIENT.post(url, qs.stringify(formBody));
  },
};

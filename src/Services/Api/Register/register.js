import AXIOS_CLIENT from '../axiosClient';
import qs from 'qs';
const url = '/user/registry';

export const RegisterService = {
  getRegister: (payload) => {
    let formBody = {
      full_name: payload.full_name,
      email: payload.email,
      password: payload.password,
      confirPassword: payload.confirPassword,
    };
    return AXIOS_CLIENT.post(url, qs.stringify(formBody));
  },
};

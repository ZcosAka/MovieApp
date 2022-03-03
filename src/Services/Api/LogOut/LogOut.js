import AXIOS_CLIENT from '../axiosClient';
import qs from 'qs';
const url = '/user/logout';

export const LogOutService = {
  getLogOut: () => {
    return AXIOS_CLIENT.post(url);
  },
};

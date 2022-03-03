import axios from 'axios';
import { getUser } from '../../local/saveData';
import qs from 'qs';

const URLS = {
  DEV: 'http://training-movie.bsp.vn:82',
};

const AXIOS_CLIENT = axios.create({
  baseURL: URLS.DEV,
  timeout: 30000,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
    app_token: 'dCuW7UQMbdvpcBDfzolAOSGFIcAec11a',
  },
});

AXIOS_CLIENT.interceptors.request.use(
  async (config) => {
    const access_token = await getUser();
    if (access_token != null) {
      config.headers.access_token = access_token
        ? `${qs.stringify(access_token)}`
        : null;
    }
    // } else {
    //   config.headers.access_token = null;
    // }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

AXIOS_CLIENT.interceptors.response.use(async (config) => {
  return config;
});

export default AXIOS_CLIENT;

import AXIOS_CLIENT from '../axiosClient';

const url = '/user/forgot-password';

export const ForgotPasswordService = {
  getForgotPassword: email => {
    return AXIOS_CLIENT.post(`${url}/?email=` + email);
  },
};

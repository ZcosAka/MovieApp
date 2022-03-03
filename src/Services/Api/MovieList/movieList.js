import AXIOS_CLIENT from '../axiosClient';

const url = '/movie/list';

export const MovieService = {
  getMovieList: (payload) => {
    return AXIOS_CLIENT.get(`${url}?page=` + payload.currentPage);
  },
  getPage: (payload) => {
    return AXIOS_CLIENT.get(
      `${url}?page=` + payload.currentPage + '&per_page=' + payload.per_page
    );
  },
};

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  movieList: [],
  paging: {},
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovie: (state, action) => {
      state.loading = true;
    },
    fetchMovieSuccess: (state, action) => {
      state.loading = false;
      state.movieList = action.payload;
    },
    fetchMovieFailed: (state, action) => {
      state.loading = false;
    },
    setPaging: (state, action) => {
      state.paging = action.payload;
    },
  },
});

export const { actions, reducer } = movieSlice;
export const { fetchMovie, fetchMovieSuccess, fetchMovieFailed, setPaging } =
  actions;

export default reducer;

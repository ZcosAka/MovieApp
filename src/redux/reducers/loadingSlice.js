import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.loading = true;
    },
    hideLoading: (state, action) => {
      state.loading = false;
    },
  },
});

export const { actions, reducer } = loadingSlice;
export const { showLoading, hideLoading } = actions;

export default reducer;

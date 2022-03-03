import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logging: false,
  isLoggedIn: false,
  data: [],
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    fetchLogin: (state, action) => {
      state.logging = true;
    },
    fetchLoginSuccess: (state, action) => {
      state.logging = false;
      state.isLoggedIn = true;
      state.data = action.payload;
    },
    fetchLoginFailed: (state, action) => {
      state.logging = false;
    },
    fetchLogout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { actions, reducer } = loginSlice;
export const { fetchLogin, fetchLoginSuccess, fetchLoginFailed, fetchLogout } =
  actions;

export default reducer;

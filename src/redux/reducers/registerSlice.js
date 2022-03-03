import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    fetchRegister: (state, action) => {
      state.loading = true;
    },
    fetchRegisterSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchRegisterFailed: (state, action) => {
      state.loading = false;
    },
  },
});

export const { actions, reducer } = registerSlice;
export const { fetchRegister, fetchRegisterSuccess, fetchRegisterFailed } =
  actions;

export default reducer;

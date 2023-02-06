import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    // nếu login = false thì
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    /// register
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
    },
    /// logout
    // logoutStart: (state) => {
    //   state.login.isFetching = true;
    // },
    logoutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.currentUser = null;
      state.login.error = false;
    },
    // logoutFailed: (state) => {
    //   state.login.isFetching = false;
    //   state.login.error = true;
    // },
    // update
    update: (state, action) => {
      state.login.currentUser.data.biography = action.payload.data.biography;
      state.login.currentUser.data.avatar = action.payload.data.avatar;
      state.login.currentUser.data.gender = action.payload.data.gender;
      state.login.currentUser.data.phone = action.payload.data.phone;
      state.login.currentUser.data.fullName = action.payload.data.fullName;
    },
  },
});
export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutSuccess,
  update,
} = authSlice.actions;
export default authSlice.reducer;

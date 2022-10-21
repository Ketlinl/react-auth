import { createReducer } from "@reduxjs/toolkit";
import { loginAction, logoutAction, fetchUserAction } from "./actions";

const initialState = {
  token: null,
  user: null
};

const accountsReducer = createReducer(initialState, builder => {
  builder
    .addCase(loginAction, (state, action) => {
      const { token } = action.payload;
      localStorage.setItem("token", token);
      state.token = token
    })
    .addCase(logoutAction, (state, action) => {
      localStorage.removeItem("token");
      return state;
    })
    .addCase(fetchUserAction, (state, action) => {
      const { user } = action.payload;
      state.user = user;
    })
})

export default accountsReducer;
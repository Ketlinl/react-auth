import { createAction } from "@reduxjs/toolkit";
export const loginAction = createAction("LOGIN");
export const logoutAction = createAction("LOGOUT");
export const fetchUserAction = createAction("FETCH_USER");

import { connectRouter } from "connected-react-router";
import { combineReducers } from "@reduxjs/toolkit";
import accountsReducer from "screens/Accounts/reducers";

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  account: accountsReducer
});

export default createRootReducer;
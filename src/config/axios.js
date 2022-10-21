/* eslint-disable indent */
import axios from "axios";
import { push } from "connected-react-router";
import { errorAlert } from "shared/alerts";
import { logoutAction } from "screens/Accounts/actions";
import store from "./store";

let baseURL = "http://0.0.0.0:5000";

switch(process.env.NODE_ENV) {
  case "staging":
    baseURL = "https://api.staging.com.br";
    break;
  case "production":
    baseURL = "https://api.com.br";
    break;
  case "sandbox":
    baseURL = "https://api.sandbox.com.br";
    break;
  default:
    break;
}

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(error) {
  console.error(error);
  return Promise.reject(error);
});


axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  if (error.response) {
    if (error.response.status === 401) {
      if (error.response.data.code === "token_not_valid") {
        errorAlert("Ops... Sua sessão expirou.");
        store.dispatch(logoutAction());
        store.dispatch(push("/"));
      }
    }

    let msg = "Erro desconhecido!";
    try {
      msg = error.response.data.non_field_errors[0];
    } catch(e) {
      msg = error.response.data.detail;
    }

    console.error(msg);
    return Promise.reject(msg);
  }
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Erro de conexão, verifique sua internet ou tente novamente mais tarde."));
  }

  return Promise.reject(error);
});

export { baseURL };
export default axios;
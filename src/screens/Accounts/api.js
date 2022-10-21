export function loginAPI(data) {
  const url = "/auth/";
  return axios.post(url, data);
}

export function getLoggedUserAPI() {
  const url = "/representative/current-user";
  return axios.get(url);
}
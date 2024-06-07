const KEY = "user";
export const storeCurrentUser = (data) => {
  sessionStorage.setItem(KEY, JSON.stringify(data));
};

export const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem(KEY));
};

export const getUserRole = () => {
  const user = JSON.parse(sessionStorage.getItem(KEY));
  return user?.role;
};

export const getToken = () => {
  const user = JSON.parse(sessionStorage.getItem(KEY));
  return user?.token;
};

export const logoutCurrentUser = () => {
  sessionStorage.removeItem(KEY);
};

export const authorizationHeader = (headers, storeState) => {
  const result = JSON.parse(sessionStorage.getItem(KEY));
  if (result) {
    headers.set("Authorization", `Bearer ${result?.token}`);
  }
  return headers;
};

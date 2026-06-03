import Cookies from "js-cookie";

export const setToken = (token) => {
  Cookies.set("token", token, {
    expires: 7,
    secure: false,
    sameSite: "Lax",
  });
};

export const getToken = () => {
  return Cookies.get("token");
};

export const removeToken = () => {
  Cookies.remove("token");
};
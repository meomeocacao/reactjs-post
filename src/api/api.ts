import axios from "axios";
export const Host = "https://nestjs-post.herokuapp.com/";
export const LoginAPI = Host + "auth/login";
export const UserApi = Host + "user/";

export const LoginUser = (username: string, email: string) => {};

export const GetCurrentToken = (): any => {
  return localStorage.getItem("token");
};

export const GetUser = async (token: string | null) => {
  return await axios.get(UserApi + token);
};

import { axiosInstance } from "../../../config/axios";

export const signUp = async (body: any) => {
  const response = await axiosInstance.post("api/auth/signup", body);

  return response;
};
export const signIn = async (body: any) => {
  const response = await axiosInstance.post("api/auth/login", body);
  localStorage.setItem("token", response.data.token);
  return response;
};

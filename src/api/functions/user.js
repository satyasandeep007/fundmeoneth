import axios from "axios";
import { user } from "../apiEndPoints";

export const sendOtp = async (mobile) => {
  console.log("mobile: ", mobile);
  let config = {
    method: "post",
    url: user.sendOtp,
    headers: {},
    data: { mobile }
  };
  return axios(config);
};

export const login = async () => {
  let config = {
    method: "post",
    url: user.login,
    headers: {}
  };
  return axios(config);
};

export const register = async () => {
  let config = {
    method: "post",
    url: user.register,
    headers: {}
  };
  return axios(config);
};

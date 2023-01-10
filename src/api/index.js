import { get, post } from "./config";
import endpoints from "./endpoints";

export const getTopics = (params) => {
  return get(endpoints.GET_TOPICS, params);
};

export const generateOtpForLogin = (data, headers) => {
  return post(endpoints.GENERATE_OTP_FOR_LOGIN, {}, data, headers);
};

export const verifyOtp = (data) => {
  return get(endpoints.VERIFY_OTP, data);
};

export const getUserDetails = () => {
  return get(endpoints.GET_USER_DETAILS);
};

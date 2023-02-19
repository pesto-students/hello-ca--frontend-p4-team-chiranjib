import { get, put, patch, post } from "./config";
import endpoints from "./endpoints";

export const getTopics = (params) => {
  return get(endpoints.GET_TOPICS, params);
};

export const generateOtpForLogin = (data, headers) => {
  return post(endpoints.GENERATE_OTP_FOR_LOGIN, {}, data, headers);
};

export const generateOtpForRegister = (data, headers) => {
  return post(endpoints.GENERATE_OTP_FOR_REGISTER, {}, data, headers);
};

export const verifyOtp = (data) => {
  return get(endpoints.VERIFY_OTP, data);
};

export const getUserDetails = () => {
  return get(endpoints.GET_USER_DETAILS);
};

export const updateUserDetails = (data, headers) => {
  return put(endpoints.UPDATE_USER_DETAILS, {}, data, headers);
};

export const updateUserOnlineStatus = (data) => {
  return patch(endpoints.UPDATE_USER_ONLINE_STATUS, {}, data);
};

export const getUserPaymentHistory = () => {
  return get(endpoints.GET_USER_PAYMENT_HISTORY);
};

export const getCAPaymentOutHistory = () => {
  return get(endpoints.GET_CA_PAYMENT_OUT_HISTORY);
};

export const getUserCallHistory = () => {
  return get(endpoints.GET_USER_CALL_HISTORY);
};

export const getCaCallHistory = () => {
  return get(endpoints.GET_CA_CALL_HISTORY);
};

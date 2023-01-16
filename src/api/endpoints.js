const endpoints = {
  GET_TOPICS: "/user/getTopics",
  GET_USER_DETAILS: "/user/",
  GENERATE_OTP_FOR_LOGIN: "/auth/login",
  GENERATE_OTP_FOR_REGISTER: "/auth/register",
  VERIFY_OTP: "/auth/verifyOtp",
  UPDATE_USER_ONLINE_STATUS: "/auth/user/updateOnlineStatus",
  GET_USER_PAYMENT_HISTORY: "/payment/getUserPaymentHistory",
  GET_CA_PAYMENT_OUT_HISTORY: "/payment/getCAPaymentOutHistory",
};

export default endpoints;

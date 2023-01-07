import { get } from "./config";
import endpoints from "./endpoints";

export const getTopics = (params) => {
  return get(endpoints.GET_TOPICS, params);
};

export const getUserDetails = () => {
  return get(endpoints.GET_USER_DETAILS);
};

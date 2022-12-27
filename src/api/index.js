import { get } from "./config";
import endpoints from "./endpoints";

export const getTopics = (params) => {
  return get(endpoints.GET_TOPICS, params);
};

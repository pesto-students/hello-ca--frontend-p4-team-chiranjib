import {
  USER_DETAILS_LOADING,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
} from "./constants";

import { getUserDetails as getUserDetailsApi } from "../../../api/index";

export const getUserDetails = () => {
  return async (dispatch) => {
      dispatch(setUserDetailsLoading());
    try {
      const response = await getUserDetailsApi();
      if (response?.data?.status === 200) {
        dispatch(storeUserDetails(response.data.user));
      }
    } catch (error) {
      console.log(error);
      storeUserDetailsError(error);
    }
  };
};

export const storeUserDetails = (user) => {
  return {
    type: USER_DETAILS_SUCCESS,
    user,
  };
};

export const setUserDetailsLoading = () => {
  return {
    type: USER_DETAILS_LOADING,
  };
};

export const storeUserDetailsError = (error) => {
  return {
    type: USER_DETAILS_ERROR,
    error,
  };
};

import {
  USER_DETAILS_LOADING,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_ERROR,
  REMOVE_USER_DETAILS,
} from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };

    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.user,
        error: null,
      };

    case USER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };

    case REMOVE_USER_DETAILS:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;

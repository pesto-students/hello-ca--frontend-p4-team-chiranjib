import { combineReducers } from "redux";

import userReducer from "./common/User/reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

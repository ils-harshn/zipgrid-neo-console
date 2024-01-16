import { combineReducers } from "redux";
import dataForAuthLoginReducer from "./auth/dataForAuthLoginReducer";

const rootReducer = combineReducers({
  dataForAuthLoginReducer,
});

export default rootReducer;

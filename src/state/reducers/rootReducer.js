import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { doctoresReducer } from "./doctorReducer";


export const rootReducer = combineReducers({
  auth: authReducer,
  doctor: doctoresReducer
})
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { doctoresReducer } from "./doctorReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
  auth: authReducer,
  doctor: doctoresReducer,
  ui: uiReducer
})
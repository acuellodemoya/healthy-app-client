import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { doctoresReducer } from "./doctorReducer";
import { patientReducer } from "./patientReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
  auth: authReducer,
  doctor: doctoresReducer,
  patient: patientReducer,
  ui: uiReducer
})
import { types } from "../types/types";

const initialState = {
  pacientes: []
}

export const patientReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.cargarPacientes:
      return {
        ...state,
        pacientes: action.payload
      }
  
    default:
      return state
  }
}
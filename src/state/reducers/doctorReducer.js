import { types } from "../types/types";

export const doctoresReducer = ( state = {}, action ) => {

  switch ( action.type ) {
    case types.cargarDoctores:
      return {
        doctores: action.payload
      }

    default:
      return state
  }
}
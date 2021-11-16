import { types } from "../types/types";

const initialState = {
  doctores: [],
  activo: {}
}

export const doctoresReducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case types.cargarDoctores:
      return {
        ...state,
        doctores: action.payload
      }

    case types.eliminarDoctor:
      return {
        ...state,
        eliminado: action.payload
      }

    case types.actualizarDoctor:
      return{
        state
      }

    case types.seleccionarDoctor:
      return {
        ...state,
        activo: action.payload
      }

    case types.quitarSeleccion:
      return {
        ...state,
        activo: null
      }

    default:
      return state
  }
}
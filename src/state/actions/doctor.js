import { types } from "../types/types";


export const getDoctors = ( token ) => {
  return async( dispatch ) => {
    const config = {
        method: 'GET',
        headers:{
            'auth': `${ token }`
        }
    }
    
    const response = await fetch("http://localhost:3001/api/doctor", config)
    const data = await response.json()
    dispatch( cargarDoctores(data) )
  }
}

export const cargarDoctores = ( doctores ) => {
  return {
    type: types.cargarDoctores,
    payload: doctores
  }
}
import Swal from "sweetalert2"
import { fetchWithToken } from "../../helpers/fech"
import { types } from "../types/types"


export const getPatients = () => {
  return async( dispatch ) => {
    
    const response = await fetchWithToken("paciente", "", "GET")
    const data = await response.json()
    
    dispatch( cargarPacientes( data ) )
  }
}

export const addPatient = ( patient ) => {
  return async() => {
    
    const response = await fetchWithToken("paciente", patient, "POST")
    const data = await response.json()

    if( data.message ){
      Swal.fire("Se completo la tarea", data.message, 'success')
    }
  }
}

export const deletePatient = ( email ) => {
  return async() => {
  
    const response = await fetchWithToken(`paciente/${ email }`, "", "DELETE")
    const data = await response.json()

    if( data?.message ){
      Swal.fire(data.message, `${ data.user.nombres } ${ data.user.apellidos }`, 'success')
    }
  }
}

const cargarPacientes = ( data ) => ({
  type: types.cargarPacientes,
  payload: data
})
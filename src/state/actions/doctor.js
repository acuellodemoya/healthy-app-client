import Swal from "sweetalert2";
import { fetchWithToken } from "../../helpers/fech";
import { types } from "../types/types";

export const getDoctors = () => {
  return async( dispatch ) => {
    
    const response = await fetchWithToken("doctor", "", "GET")
    const data = await response.json()
    
    dispatch( cargarDoctores(data) )
  }
}

export const updateDoctor = ({ email, nombresForm, apellidosForm, telefonoForm }) => {
  return async( dispatch ) => {
  
    const response = await fetchWithToken(`doctor/${ email }`, { nombresForm, apellidosForm, telefonoForm }, "PUT")
    const data = await response.json()
    dispatch( editarDoctor() )
  }
}

export const deleteDoctor = ( email ) => {
  return async(dispatch) => {
    
    const apiCall = await fetchWithToken(`doctor/${ email }`, "", "DELETE")
    const data = await apiCall.json()

    if(data?.message){
      dispatch( eliminarDoctor( data ) )
      Swal.fire("Doctor eliminado", data.message, 'success')
    }
  }
}

export const seleccionarDoc = ( doctor ) => {
  return {
    type: types.seleccionarDoctor,
    payload: doctor
  }
}

export const quitarSeleccion = () => {
  return {
    type: types.quitarSeleccion
  }
}

export const cargarDoctores = ( doctores ) => {
  return {
    type: types.cargarDoctores,
    payload: doctores
  }
}

export const editarDoctor = () => {
  return {
    type: types.actualizarDoctor
  }
}

export const eliminarDoctor = ( doctor ) => {
  return {
    type: types.eliminarDoctor,
    payload: doctor
  }
}

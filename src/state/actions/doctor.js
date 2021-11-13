import Swal from "sweetalert2";
import { types } from "../types/types";

const token = JSON.parse(window.localStorage.getItem('authToken'))

export const getDoctors = () => {
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

export const updateDoctor = ({ email, nombresForm, apellidosForm, telefonoForm }) => {
  return async( dispatch ) => {
    const config = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'auth': `${token}`
      },
      body: JSON.stringify({ nombresForm, apellidosForm, telefonoForm })
    }
    
    const response = await fetch(`http://localhost:3001/api/doctor/${ email }`, config)
    const data = await response.json()
    console.log( data )
    dispatch( editarDoctor() )
  }
}

export const deleteDoctor = ( email ) => {
  return async(dispatch) => {
    const config = {
      method: 'DELETE',
      headers: {
        'auth': `${ token }`
      }
    }
  
    const apiCall = await fetch(`http://localhost:3001/api/doctor/${ email }`, config)
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

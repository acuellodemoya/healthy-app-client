import { types } from "../types/types"
import Swal from "sweetalert2"
import { fetchWithoutToken } from "../../helpers/fech"

export const startLogin = ( email, password ) => {
  return async( dispatch ) => {
  
    const apiCall = await fetchWithoutToken( "auth", { email, password } )
    const res = await apiCall.json()

    if( res?.token ){
      window.localStorage.setItem('authToken', JSON.stringify(res.token))
      dispatch( setLogged( true ) )
    }else{
      Swal.fire('Error', res.message, 'error')
    }

  }
}

export const startRegister = ( user ) => {
  return async() => {
  
    const apiCall = await fetchWithoutToken("doctor", user)
    const res = await apiCall.json()
    console.log( res )
    if(res?.message){
      Swal.fire(res.message, '', 'success')
    }
  }
}

export const setLogged = ( log ) => {
  return {
    type: types.login,
    payload: log
  }
}

export const setLogout = () => {
  return {
    type: types.logout
  }
}
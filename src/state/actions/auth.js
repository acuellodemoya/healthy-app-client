import { types } from "../types/types"
import Swal from "sweetalert2"

export const startLogin = ( email, password ) => {
  return async( dispatch ) => {
    
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }
  
    const apiCall = await fetch("http://localhost:3001/api/auth", config)
    const res = await apiCall.json()
    console.log(res)

    if( res?.token ){
      window.localStorage.setItem('authToken', JSON.stringify(res.token))
      dispatch( setLogged( true ) )
    }else{
      Swal.fire('Error', res.message, 'error')
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
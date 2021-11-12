import { types } from "../types/types"

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
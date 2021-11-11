import { types } from "../types/types"

export const setLogged = () => {
  return {
    type: types.login
  }
}

export const setLogout = () => {
  return {
    type: types.logout
  }
}
import { types } from "../types/types";

const initialState = {
  islogged: false
}

export const authReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case types.login:
      return {
        islogged: true
      }

    case types.logout: 
      return {
        islogged: false
      }
  
    default:
      return state;
  }
}
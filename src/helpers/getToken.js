export const getToken = () => {
  let isLogged;
  let token = window.localStorage.getItem('authToken')

  if( token !== null ){
    isLogged = true
  }else{
    isLogged = false
  }

  return isLogged
}
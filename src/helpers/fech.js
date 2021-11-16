
const TOKEN = JSON.parse(window.localStorage.getItem('authToken'))
const BASE_URL = "http://localhost:3001/api"

export const fetchWithoutToken = ( endpoint, data ) => {
  const url =  `${ BASE_URL }/${ endpoint }`

  const config = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify( data )
  }

  return fetch( url, config )
}

export const fetchWithToken = ( endpoint, data = "", method ) => {
  const url =  `${ BASE_URL }/${ endpoint }`

  if( method === "GET" || method === "DELETE" ) {
    const config = {
      method: method,
      headers:{
        'auth': `${ TOKEN }`
      }
    }

    return fetch( url, config )
  }else {
    const config = {
      method: method,
      headers: {
        'Content-type': 'application/json',
        'auth': `${ TOKEN }`
      },
      body: JSON.stringify( data )
    }

    return fetch( url, config )
  }
}
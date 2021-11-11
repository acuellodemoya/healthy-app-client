import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { useForm } from '../../hooks/useForm'
import { setLogged } from '../../state/actions/auth'


export const LoginScreen = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [ values, handleInputChange, reset ] = useForm({
    email: 'gabriel@email.com',
    password: '123456'
  })

  const [user, setUser] = useState(localStorage.getItem('authToken'))
  
  const { email, password } = values

  const apiCall = async() => {
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify( values )
    }
  
    const apiCall = await fetch("http://localhost:3001/api/auth", config)
    const res = await apiCall.json()
    setUser(res)
    window.localStorage.setItem('authToken', JSON.stringify(res.token))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall();
    dispatch( setLogged() )
    reset();
    history.replace('/')
  }

  return (
      <div className="auth__container">
        <div className="auth__container-content">
          <div className="overlay_img"></div>
        </div>
        <div className="auth__container-form">
          <h3 className="auth__form-title"> Bienvenido </h3>
          <form onSubmit={ handleSubmit } >
            <input 
              className="auth__input" 
              type="text" 
              placeholder=" Correo "
              name="email"
              value={ email }
              onChange={ handleInputChange }
            />

            <input 
              className="auth__input" 
              type="password" 
              placeholder=" Contraseña "
              name="password"
              value={ password }
              onChange={ handleInputChange }
            />

            <button className="auth__btn" type="submit"> Iniciar </button>
            
            <Link to="/auth/register" className="auth__link"> Registro </Link>
          </form>
        </div>
      </div>
  )
}

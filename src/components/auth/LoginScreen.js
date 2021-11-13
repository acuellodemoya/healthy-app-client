import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startLogin } from '../../state/actions/auth'


export const LoginScreen = () => {
  const dispatch = useDispatch()

  const [ values, handleInputChange ] = useForm({
    email: 'pepito@email.com',
    password: '12345'
  })
  
  const { email, password } = values

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( startLogin(email, password) )
  }

  return (
      <div className="auth__container">
        <div className="auth__container-content">
          <div className="overlay_img"></div>
        </div>
        <div className="auth__container-form">
          <h3 className="auth__form-title"> Bienvenido </h3>
          <form >
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

            <button className="auth__btn" onClick={ handleSubmit } type="submit"> Iniciar </button>
            
            <Link to="/register" className="auth__link"> Registro </Link>
          </form>
        </div>
      </div>
  )
}

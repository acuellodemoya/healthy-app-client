import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div className="auth__container">
      <div className="auth__container-content">
        <div className="overlay_img"></div>
      </div>
      <div className="auth__container-form">
        <h3 className="auth__form-title"> Registrar Cuenta </h3>
        <form >
          <input 
            className="auth__input" 
            type="text" 
            placeholder=" Nombre "
          />

          <input 
            className="auth__input" 
            type="text" 
            placeholder=" Correo "
          />

          <input 
            className="auth__input" 
            type="password" 
            placeholder=" Contraseña "
          />

          <input 
            className="auth__input" 
            type="password" 
            placeholder=" Confirmar Contraseña "
          />

          <button className="auth__btn" type="submit"> Registrar </button>
          
          <Link to="/login" className="auth__link"> Iniciar Sesion </Link>
        </form>
      </div>
    </div>
  )
}

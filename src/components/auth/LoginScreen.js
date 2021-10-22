import React from 'react'
import { Link } from 'react-router-dom'


export const LoginScreen = () => {

    return (
        <div className="auth__container">
          <div className="auth__container-content">
            <div className="overlay_img"></div>
          </div>
          <div className="auth__container-form">
            <h3 className="auth__form-title"> Bienvenido </h3>
            <form >
              <input className="auth__input" type="text" placeholder=" Correo "/>

              <input className="auth__input" type="password" placeholder=" Contraseña "/>

              <button className="auth__btn" type="submit"> Iniciar </button>
              
              <Link to="/register" className="auth__link"> Registro </Link>
            </form>
          </div>
        </div>
    )
}

import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startRegister } from '../../state/actions/auth'

export const RegisterScreen = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [ values, handleInputChange, reset ] = useForm({
    nombres: '', 
    apellidos: '', 
    email: '', 
    telefono: 0, 
    password: '',
    password2: ''
  })
  const { nombres, apellidos, telefono ,email ,password ,password2 } = values

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      nombres: nombres,
      apellidos: apellidos,
      email: email,
      telefono: telefono,
      password: password
    }

    dispatch( startRegister(user) )
    reset();
    setTimeout(() => history.push('/login'), 3000)
  }

  return (
    <div className="auth__container">
      <div className="auth__container-content">
        <div className="overlay_img"></div>
      </div>
      <div className="auth__container-form">
        <h3 className="auth__form-title"> Registrar Cuenta </h3>
        <form onSubmit={ handleSubmit }>
          <input 
            className="auth__input" 
            type="text" 
            placeholder=" Nombre "
            name="nombres"
            value={ nombres }
            onChange={ handleInputChange }
          />

          <input 
            className="auth__input" 
            type="text" 
            placeholder=" Apellido "
            name="apellidos"
            value={ apellidos }
            onChange={ handleInputChange }
          />

          <input 
            className="auth__input" 
            type="number" 
            placeholder=" Telefono "
            name="telefono"
            value={ telefono }
            onChange={ handleInputChange }
          />

          <input 
            className="auth__input" 
            type="email" 
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

          <input 
            className="auth__input" 
            type="password" 
            placeholder=" Confirmar Contraseña "
            name="password2"
            value={ password2 }
            onChange={ handleInputChange }
          />

          <button className="auth__btn" type="submit"> Registrar </button>
          
          <Link to="/login" className="auth__link"> Iniciar Sesion </Link>
        </form>
      </div>
    </div>
  )
}

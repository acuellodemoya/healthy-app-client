import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogout } from '../../state/actions/auth';

export const Navbar = () => {
  const dispatch = useDispatch()

  const [showNav, setShowNav] = useState( false )

  const handleShow = () => {
    setShowNav( !showNav )
  }

  const handleLogout = () => {
    window.localStorage.removeItem('authToken')
    dispatch( setLogout() )
  }

  return (
    <>
        <div className="nav-bar">
        <div>
          {showNav 

            ?(<i onClick={ handleShow } className="fas fa-angle-double-left"></i>)
            :(<i onClick={ handleShow } className="fas fa-angle-double-right"></i>)
          }
        </div>
        <h1>Healthy App</h1>
        <Link to="/" onClick={ handleLogout } className="btn"><i class="fas fa-sign-out-alt"></i>Logout</Link>
      </div>

      <div className={`side-bar ${ showNav ?"" : "hidden" }`}>
          <div className="side-bar__items">
            <div className="side-bar__link">
              <i className="fas fa-user-circle"></i>
              <Link to="/">Doctores</Link>
            </div>
            <div className="side-bar__link">
              <i className="fas fa-th-list"></i>
              <Link to="/pacientes">Pacientes</Link>
            </div>
            {/* <div className="side-bar__link">
              <i class="far fa-calendar-check"></i>
              <Link to="/crear-cita">Citas</Link>
            </div> */}
          </div>
      </div>
    </>
  )
}

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Navbar = () => {

  const history = useHistory()

  const [showNav, setShowNav] = useState( false )

  const handleShow = () => {
    setShowNav( !showNav )
  }

  const handleLogout = () => {
    window.localStorage.removeItem('authToken')
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
        <Link to='/auth/login' onClick={ handleLogout } className="btn"><i class="fas fa-sign-out-alt"></i>Logout</Link>
      </div>

      <div className={`side-bar ${ showNav ?"" : "hidden" }`}>
          <div className="side-bar__items">
            <h3 className="side-bar__name">Pepe</h3>
            <div className="side-bar__link">
              <i className="fas fa-user-circle"></i>
              <span>Home</span>
            </div>
            <div className="side-bar__link">
              <i className="far fa-calendar-alt"></i>
              <span>Calendar</span>
            </div>
            <div className="side-bar__link">
              <i className="fas fa-th-list"></i>
              <span>List</span>
            </div>
          </div>
          {/* <Link to="/login" className="btn">Logout</Link> */}
      </div>
    </>
  )
}

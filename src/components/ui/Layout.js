import React from 'react'
import { Navbar } from '../ui/Navbar'

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <div className="container">
          { children }
      </div>
    </>
  )
}

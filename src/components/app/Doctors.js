import React from 'react'

export const Doctors = ({ data }) => {
  return (
    <div className="list">
      {
        data?.map(( doctor ) => (
          <div key={ doctor._id } className="list-item">
            <h2>{ doctor.nombres } { doctor.apellidos }</h2>
            <h3>{ doctor.email }</h3>
            <p>{ doctor.telefono }</p>
          </div>
        ))
      }
    </div>
  )
}

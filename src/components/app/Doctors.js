import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteDoctor, seleccionarDoc } from '../../state/actions/doctor'
import { setModalOpen } from '../../state/actions/ui'
import { FormModal } from './FormModal'

export const Doctors = ({ data }) => {

  const dispatch = useDispatch()
  
  const handleDelete = ( email ) => {
    dispatch( deleteDoctor( email ) )
  }

  const handleEdit = ( doctor ) => {
    dispatch( seleccionarDoc( doctor ) )
    dispatch( setModalOpen() )
  }

  return (
    <>
      <div className="list">
        {
          data?.map(( doctor ) => (
            <div key={ doctor._id } className="list-item">
              <div className="doctor-details">
                <h2>{ doctor.nombres } { doctor.apellidos }</h2>
                <h3>{ doctor.email }</h3>
                <p>{ doctor.telefono }</p>
              </div>
              <div className="actions">
                <button 
                  onClick={() => handleEdit(doctor) } className="btn edit">
                  Editar
                </button>
                <button onClick={() => handleDelete( doctor.email ) } className="btn delete">Eliminar</button>
              </div>
            </div>
          ))
        }
      </div>
      <FormModal/>
    </>
  )
}

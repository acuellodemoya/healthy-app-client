import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePatient, getPatients } from '../../state/actions/patient'
import { setModalOpen } from '../../state/actions/ui'
import { PatientModal } from './PatientModal'

export const ListPatients = () => {

  const dispatch = useDispatch()
  const { pacientes } = useSelector(state => state.patient)

  useEffect(() => {
    dispatch( getPatients() )
  }, [ dispatch ])

  const openModal = () => {
    dispatch( setModalOpen() )
  }

  const handleDelete = ( email ) => {
    dispatch( deletePatient( email ) )
  }

  const handleEdit = ( paciente ) => {
    console.log( paciente )
    dispatch( setModalOpen() )
  }

  return (
    <>
      <div className="list">
        <button onClick={ openModal } className="btn-paciente" >Agregar Paciente</button>
        {
          pacientes?.map(( paciente ) => (
            <div key={ paciente._id } className="list-item">
              <div className="doctor-details">
                <h2>{ paciente.nombres } { paciente.apellidos }</h2>
                <h3>{ paciente.email }</h3>
                <p>{ paciente.telefono }</p>
                <p>Tipo de sangre: { paciente.tipo_sangre }</p>
              </div>
              <div className="actions">
                <button className="btn edit" onClick={ () => handleEdit( paciente ) }>
                  Editar
                </button>
                <button onClick={() => handleDelete( paciente.email ) } className="btn delete">Eliminar</button>
              </div>
            </div>
          ))
        }
      </div>
      <PatientModal/>
    </>
  )
}

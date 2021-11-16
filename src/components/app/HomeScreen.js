import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '../../state/actions/doctor'
import { Doctors } from '../app/Doctors'

export const HomeScreen = () => {

  const dispatch = useDispatch()
  const { doctores } = useSelector(state => state.doctor)
      
  useEffect(() => {
    dispatch( getDoctors() )
  }, [ dispatch ])
  
  return (
    <>
      <Doctors data={ doctores } />
    </>
  )
}

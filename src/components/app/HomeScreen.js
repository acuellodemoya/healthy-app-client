import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '../../state/actions/doctor'

import { Layout } from '../ui/Layout'
import { Doctors } from '../app/Doctors'

export const HomeScreen = () => {

    const dispatch = useDispatch()
    const { doctores } = useSelector(state => state.doctor)
        
    useEffect(() => {
        const token = JSON.parse(window.localStorage.getItem('authToken'))
        dispatch( getDoctors(token) )
    }, [ dispatch ])
    
    return (
        <>
            <Layout>
                <Doctors data={ doctores } />
            </Layout>
        </>
    )
}

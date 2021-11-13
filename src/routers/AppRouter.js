import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { Appointment } from '../components/app/Appointment';
import { HomeScreen } from '../components/app/HomeScreen';
import { ListPatients } from '../components/app/ListPatients';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { getToken } from '../helpers/getToken';
import { setLogged } from '../state/actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {
  const dispatch = useDispatch()
  const { islogged } = useSelector(state => state.auth);

  useEffect(() => {
    const token = getToken()
    if( token ) {
      dispatch( setLogged( token ) )
    }else {
      dispatch( setLogged( token ) )
    }
  }, [ islogged, dispatch ])


  return (
    <Router>
      <Switch>
        <PublicRouter isLogged={ islogged } exact={ true } path="/login" component={ LoginScreen }/>
        <PublicRouter isLogged={ islogged } exact={ true } path="/register" component={ RegisterScreen }/>
        <PrivateRouter isLogged={ islogged }  exact={ true } path="/pacientes" component={ ListPatients }/>
        <PrivateRouter isLogged={ islogged } exact={ true } path="/crear-cita" component={ Appointment }/>
        <PrivateRouter isLogged={ islogged } exact={ true } path="/" component={ HomeScreen }/>
        <Redirect to="/login"/>
      </Switch>
    </Router>        
  )
}

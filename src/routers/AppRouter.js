import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
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
  const [isLogged, setisLogged] = useState(false)
  
  useEffect(() => {
    const token = getToken()
    console.log(token)
    if( token ) {
      dispatch( setLogged( token ) )
      setisLogged( true )  
    }else {
      dispatch( setLogged( token ) )
      setisLogged( false )
    }
  }, [ isLogged, dispatch ])


  return (
    <Router>
      <Switch>
        <PublicRouter isLogged={ isLogged } exact={ true } path="/login" component={ LoginScreen }/>
        <PublicRouter isLogged={ isLogged } exact={ true } path="/register" component={ RegisterScreen }/>
        <PrivateRouter isLogged={ isLogged }  exact={ true } path="/pacientes" component={ ListPatients }/>
        <PrivateRouter isLogged={ isLogged } exact={ true } path="/crear-cita" component={ Appointment }/>
        <PrivateRouter isLogged={ isLogged } exact={ true } path="/" component={ HomeScreen }/>
        <Redirect to="/login"/>
      </Switch>
    </Router>        
  )
}

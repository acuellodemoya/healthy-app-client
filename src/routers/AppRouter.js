import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { HomeScreen } from '../components/app/HomeScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={ LoginScreen }/>
                <Route exact path="/register" component={ RegisterScreen }/>
                <Route path="/" component={ HomeScreen }/>
                <Redirect to="/"/>
            </Switch>
        </Router>        
    )
}

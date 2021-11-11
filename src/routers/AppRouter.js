import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { getToken } from '../helpers/getToken';
import { AuthRouter } from './AuthRouter';
import { HomeRouter } from './HomeRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouter = () => {
    const [isLogged, setIsLogged] = useState( false )

    useEffect(() => {
        const token = getToken()

        if( token ) {
            setIsLogged( true )
            
        }else {
            setIsLogged( false )
        }
    }, [ isLogged, setIsLogged ])


    return (
        <Router>
            <Switch>
                <PublicRouter 
                    path="/auth"
                    component={ AuthRouter }
                    isLogged={ isLogged }
                />
                <PrivateRoute
                    exact
                    path="/"
                    component={ HomeRouter }
                    isLogged={ isLogged }
                />
                <Redirect to="/auth/login"/>
            </Switch>
        </Router>        
    )
}

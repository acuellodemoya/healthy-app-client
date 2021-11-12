import React from 'react';
import { Redirect, Route } from 'react-router';
import { Layout } from '../components/ui/Layout';

export const PrivateRouter = ({
  component: Component,
  isLogged,
  ...rest
}) => {
  return (
    <Route {...rest}
      component={ ( props ) => (
        ( isLogged )
        ? (
          <Layout>
            <Component { ...props }/>
          </Layout>
        )
        : (
          <Redirect to="/login"/>
        )
      )}
    />
  )
}

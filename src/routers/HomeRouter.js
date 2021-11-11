import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HomeScreen } from '../components/app/HomeScreen'
import { ListPatients } from '../components/app/ListPatients'

export const HomeRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ HomeScreen }/>
        <Route exact path="/patients" component={ ListPatients }/>
        {/* <Redirect to="/"/> */}
      </Switch>
    </div>
  )
}

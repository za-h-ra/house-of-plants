import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUp from '../../screens/SignUp'
import SignIn

export default function main() {
	return (
    <main>
      <Switch>
        <Route exact path='/' render={} />
        <Route exact path='/about' render={} />
        <Route exact path='/signup' render={} />
      </Switch>
		</main>
	)
}
